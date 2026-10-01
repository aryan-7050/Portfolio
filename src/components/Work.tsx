import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    name: "Eventora",
    category: "Event Management Platform",
    tools:
      "React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Gemini AI",
    image: "/images/WhatsApp Image 2026-06-21 at 4.58.40 PM.jpeg",
  },
  {
    id: "02",
    name: "Public Bus Tracking",
    category: "Transport Tracking System",
    tools:
      "React, Tailwind CSS, Node.js, Express.js, MongoDB, Leaflet, FastAPI, Gemini AI",
    image: "/images/WhatsApp Image 2026-06-21 at 4.44.56 PM.jpeg",
  },
  {
    id: "03",
    name: "Able Space",
    category: "Task Management Platform",
    tools:
      "Next.js, React, TypeScript, Tailwind CSS, NestJS, REST API",
    image: "/images/ChatGPT Image Sep 11, 2026, 07_47_08 AM.png",
  },
  {
    id: "04",
    name: "EduFlow ",
    category: "Educational Website",
    tools:
      "React, Vite, JavaScript, CSS, Responsive Design, Springboot, Java",
    image: "/images/EduFlow Education Dashboard.png",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    const setTranslateX = () => {
      const boxes = document.getElementsByClassName("work-box");

      if (!boxes.length) return;

      const container = document.querySelector(
        ".work-container"
      ) as HTMLElement;

      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;

      const firstBox = boxes[0] as HTMLElement;
      const rect = firstBox.getBoundingClientRect();

      const parentWidth =
        firstBox.parentElement?.getBoundingClientRect().width || 0;

      const padding =
        parseInt(window.getComputedStyle(firstBox).padding) / 2 || 0;

      translateX =
        rect.width * boxes.length -
        (rectLeft + parentWidth) +
        padding;
    };

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools & Features</h4>

                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={`${project.name} project preview`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;