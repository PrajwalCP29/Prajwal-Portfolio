/**
 * Modern About component
 *
 * Professional overview with glassmorphism card design and smooth animations
 */

import React from "react";

const imageAltText = "Tech professional workspace";

const description =
  "B.Tech. Data Science student at G.H. Raisoni College of Engineering, Nagpur (CGPA: 8.27/10). Skilled in Python, SQL, and C++ with expertise in AI/ML, data visualization, and cloud technologies. I'm passionate about leveraging data science to solve real-world problems and create intelligent solutions.";

const skillsList = [
  "Python & C++",
  "SQL & NoSQL Databases",
  "Machine Learning & AI",
  "Data Visualization (Power BI, Tableau)",
  "AWS Cloud Technologies",
  "Web Development (HTML, CSS, JS)",
];

const detailOrQuote =
  "I'm passionate about problem-solving, collaboration, and quickly learning new technologies. My strength lies in combining data analysis with software development to create impactful AI/ML solutions that drive innovation and deliver measurable results.";

const About = () => {
  return (
    <section
      className="padding"
      id="about"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
      }}
    >
      {/* Tech Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              #2563EB 0px,
              #2563EB 2px,
              transparent 2px,
              transparent 20px
            )
          `,
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="glass-card animate-fade-in"
          style={{
            width: "100%",
            maxWidth: "900px",
            padding: "4rem",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#1F2937",
              fontSize: "2.25rem",
              fontWeight: "500",
            }}
          >
            About Myself
          </h2>

          <p
            className="large"
            style={{
              textAlign: "center",
              color: "#374151",
              lineHeight: "1.8",
              marginBottom: "2rem",
              fontSize: "1.125rem",
            }}
          >
            {description}
          </p>

          <hr style={{ margin: "2.5rem" }} />

          {/* Skills List */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                marginBottom: "1.5rem",
                color: "#1F2937",
                textAlign: "center",
              }}
            >
              Key Skills
            </h3>
            <ul
              style={{
                textAlign: "center",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
              className="animate-fade-in-stagger"
            >
              {skillsList.map((skill, index) => (
                <li
                  key={skill}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)",
                    borderRadius: "8px",
                    fontWeight: "500",
                    color: "#2563EB",
                    borderLeft: "3px solid #2563EB",
                    transition: "all 0.3s ease",
                    animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <hr style={{ margin: "2.5rem" }} />

          <p
            style={{
              padding: "1rem",
              textAlign: "center",
              color: "#4B5563",
              fontStyle: "italic",
              lineHeight: "1.8",
              borderLeft: "4px solid #F59E0B",
              paddingLeft: "1.5rem",
              animation: "fadeInUp 0.8s ease-out 0.4s both",
            }}
          >
            "{detailOrQuote}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
