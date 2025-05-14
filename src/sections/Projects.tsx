
import whiteGraphics from "../assets/images/white-graphics.png";
import CBX from "../assets/images/cbx.png";
import philaTours from "@/assets/images/phila-tours.png";
import yelpCamp from '@/assets/images/yelp-camp.png';
import clima from "@/assets/images/clima.png";
import paper from "@/assets/images/paper.png";
import getItDone from '@/assets/images/to-do.png';
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Nov",
    year: "2023",
    title: "A Survey Paper on Browser Extensions to Detect Web Attacks",
    results: [
      { title: "173 Full-Text Views" },
    ],
    link: "https://www.researchgate.net/publication/375883695_A_Survey_Paper_on_Browser_Extensions_to_Detect_Web_Attacks",
    image: paper,
  },
  {
    company: "Mar",
    year: "2023",
    title: " CBX: A Cross Browser Extension to Detect Multiple Web Attacks",
    results: [
      { title: "XSS Detection: ~93%" },
      { title: "SQL Injection: ~91%" },
      { title: "Phishing Detection (ML-based): ~96%" },
    ],
    link: "https://github.com/Sahethi/CrossBrowserExtension",
    image: CBX,
  },
  {
    company: "Aug",
    year: "2019",
    title: "White Graphics",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://white-graphics-rlud.vercel.app/",
    image: whiteGraphics,
  },
  {
    company: "July",
    year: "2021",
    title: "Yelp Camp",
    results: [
      { title: "Integrated Maptiler for interactive campground locations" },
      { title: "Optimized image handling with Cloudinary for faster load times" },
      { title: "Enhanced mobile responsiveness using Bootstrap and custom CSS" },
    ],
    link: "https://yelp-camp-81o8.onrender.com/",
    image: yelpCamp,
  },
  {
    company: "Oct",
    year: "2019",
    title: "Phila Tours",
    results: [
      { title: "Streamlined asset optimization with GulpJS" },
      { title: "Automated dependency management using npm" },
      { title: "Enhanced development workflow through task automation" },
    ],
    link: "https://phila-website.vercel.app/",
    image: philaTours,
  },
  {
    company: "Mar",
    year: "2021",
    title: "Get It Done",
    results: [
      { title: "Enabled task creation and deletion with priority sorting" },
      { title: "Implemented dark and light mode themes for user preference" },
      { title: "Designed interactive UI wireframes using Balsamiq wireframing tool." },
    ],
    link: "https://get-it-done-zeta.vercel.app/",
    image: getItDone,
  },
  {
    company: "May",
    year: "2019",
    title: "Clima",
    results: [
      { title: "Fetched real-time weather data using OpenWeatherMap API." },
      { title: "Processed user input for city-based forecasts are displayed." },
      { title: "Displayed weather details dynamically on the web interface." },
    ],
    link: "https://weather-app-alpha-ebon-15.vercel.app/",
    image: clima,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project"className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrown="Real-world Results"
          title="Featured Projects & Research"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
            >

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase 
                  tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>


                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={project.title + index} className="flex gap-2 text-sm md:text-base text-white/25">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>
                        Visit Now
                      </span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};
