import { useEffect, useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!section || !timeline) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    tl.to(timeline, { maxHeight: "100%", ease: "none" });

    const boxes = section.querySelectorAll(".career-info-box");
    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="career-section section-container" ref={sectionRef}>
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline" ref={timelineRef}>
            <div className="career-dot"></div>
          </div>

          {/* B.Tech Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Science & Engineering</h4>
                <h5>Dr.D.Y.Patil College Of Engineering Salokhenagar Kolhapur</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science with a strong
              foundation in Data Structures, Algorithms, DBMS, Operating
              Systems, and Full Stack Web Development. Actively involved in
              coding clubs and technical events.
            </p>
          </div>

          {/* Zidio Development Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Zidio Development</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked as a Full Stack Web Development Intern at Zidio
              Development. Built responsive web applications using React,
              Node.js, and MongoDB. Collaborated with the development team to
              deliver production-ready features and improved UI/UX across
              multiple client projects.
            </p>
          </div>

          {/* Anvistar Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>Anvistar</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a Software Development Internship at Anvistar, gaining
              hands-on experience in modern web technologies. Contributed to
              frontend development, API integration, and debugging while
              working in an agile team environment. Improved skills in React,
              JavaScript, and collaborative Git workflows.
            </p>
          </div>

          {/* Current Status */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building freelance projects for clients including e-commerce
              websites, portfolios, and management dashboards using the MERN
              stack. Focused on delivering clean, scalable, and user-friendly
              solutions while actively seeking full-time opportunities as a
              Software Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;