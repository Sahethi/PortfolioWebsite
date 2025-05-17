"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { SectionHeader } from "@/components/SectionHeader";
import google from "@/assets/images/google.jpg";
import wells from "@/assets/images/wells.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";
// ... existing imports and testimonials array ...

const testimonials = [
  {
    name: "Wells Fargo (2024 - Present)",
    position: "Software Engineer",
    text: "I spearheaded the end-to-end development of several projects like SMIS and LTRT. I was appreciated for exceptional performance, managing tasks at 4x capacity. Actively participating in deployment and functioning at a lead level.",
    avatar: wells,
  },
  {
    name: "Wells Fargo (2023 - 2024)",
    position: "Program Associate",
    text: "Worked on LIBOR Transition of documents, developed microservices in Java in ECM&D PSC (Production Support Console) application. Gained expertise in REST APIs and Spring Boot MVC architecture while developing on Admin part of SMIS2.0.",
    avatar: wells,
  },
  {
    name: "Google ExploreCS Research  (2022)",
    position: "Summer Intern in IIT Hyderabad",
    text: "Researched on the topic of Parallel Graph Algorithms on High-Performant Graph Processing Frameworks. During this internship, I have gone through the understanding of how parallel computing works, and CUDA programming. Further implementing graph algorithms on Gunrock Framework.",
    avatar: google,
  },
];

export const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;

    container.scrollTo({
      left:
        container.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: "smooth",
    });
  };

  return (
    <div className="py-16 lg:py-24 relative">
      <div className="container">
        <SectionHeader
          eyebrown="Work Life"
          title="My Experience"
          description=""
        />

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[10%] top-[64%] -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition-colors"
          aria-label="Previous"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-[10%] top-[64%] -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition-colors"
          aria-label="Next"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>

        {/* Replace the existing carousel div with this updated version */}
        <div className="mt-12 lg:mt-20 relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="flex-none w-[calc(100%-2rem)] md:w-[600px] p-6 md:p-8 transition duration-300 snap-center"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>

                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
