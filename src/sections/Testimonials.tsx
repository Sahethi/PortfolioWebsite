import google from "@/assets/images/google.jpg";
import wells from "@/assets/images/wells.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";
import { Fragment } from "react";

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
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrown="Work Life"
          title="My Experience"
          description=""
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
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
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
    
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
