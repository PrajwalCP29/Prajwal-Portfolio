/**
 * Modern Portfolio component
 *
 * Project showcase with modern card design and hover effects
 */

import React from "react";

const projectList = [
  {
    title: "Quantifying Effectiveness of Government Agricultural Policies",
    description:
      "Developed a hybrid LSTM-BERT model achieving 83.3% accuracy for sentiment analysis of 1,200+ farmer responses. Analyzed sentiment trends to evaluate government agricultural policy impact. Presented at ICCIDS-2025.",
    url: "https://github.com/PrajwalCP29",
    tags: ["Python", "ML", "LSTM-BERT", "NLP"],
  },
  {
    title: "AI Travel Planner – Personalized Itinerary Generator",
    description:
      "AI-powered travel planner generating personalized itineraries in under 5 seconds using Streamlit and Gemini API. Integrated budget, lodging, and dining recommendations with downloadable trip plans and OAuth security.",
    url: "https://github.com/PrajwalCP29",
    tags: ["Streamlit", "AI", "Gemini API", "Python"],
  },
  {
    title: "Blinkit Sales Insights Dashboard",
    description:
      "Interactive Power BI dashboard analyzing $1.2M sales data across multiple outlets. Automated real-time KPIs and visualizations, reducing manual reporting time by 50% and enabling better decision-making.",
    url: "https://github.com/PrajwalCP29",
    tags: ["Power BI", "Data Analytics", "Dashboard"],
  },
  {
    title: "Data Analytics & Cloud Solutions",
    description:
      "Completed Google Business Intelligence Specialization (Coursera), Deloitte Data Analytics Job Simulation, and AWS APAC Solutions Architecture simulation focusing on scalable cloud architectures.",
    url: "https://github.com/PrajwalCP29",
    tags: ["AWS", "Data Analytics", "Cloud"],
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding"
      id="portfolio"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
      }}
    >
      {/* Tech Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              #2563EB 0px,
              #2563EB 1px,
              transparent 1px,
              transparent 15px
            ),
            repeating-linear-gradient(
              90deg,
              #2563EB 0px,
              #2563EB 1px,
              transparent 1px,
              transparent 15px
            )
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            fontSize: "2.5rem",
            color: "#1F2937",
            animation: "fadeInDown 0.7s ease-out",
          }}
        >
          Portfolio & Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
          className="animate-fade-in-stagger"
        >
          {projectList.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(37, 99, 235, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Gradient Line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #2563EB, #F59E0B)",
                  }}
                />

                {/* Project Icon */}
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  💻
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    marginBottom: "1rem",
                    color: "#1F2937",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    lineHeight: "1.4",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1F2937";
                  }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p
                  style={{
                    flex: 1,
                    color: "#6B7280",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                  }}
                  className="small"
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "auto",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "rgba(37, 99, 235, 0.1)",
                        color: "#2563EB",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "12px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        border: "1px solid rgba(37, 99, 235, 0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Indicator */}
                <div
                  style={{
                    marginTop: "1rem",
                    color: "#2563EB",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  View on GitHub →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
