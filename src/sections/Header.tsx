"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "home", label: "Home" },
  { href: "project", label: "Project" },
  { href: "about", label: "About" },
  { href: "contact", label: "Contact" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.3, // Lower threshold for better detection
        rootMargin: "-100px 0px -100px 0px", // Adjust margins for better accuracy
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={`#${item.href}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.href);
            }}
            className={`
              px-4 py-1.5 
              rounded-full 
              text-sm 
              font-semibold 
              transition-all 
              duration-300 
              ease-in-out
              ${
                activeSection === item.href
                  ? "bg-white text-gray-900"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }
            `}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
