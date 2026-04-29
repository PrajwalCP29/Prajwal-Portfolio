/**
 * Modern Skills component
 *
 * Displays technical skills with glassmorphism cards and smooth animations
 */

import React from "react";

const skillCategories = [
  {
    category: "Programming & Querying",
    skills: ["Python", "SQL", "Java", "C++"],
    icon: "💻",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"],
    icon: "🗄️",
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "Git", "GitHub"],
    icon: "☁️",
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: "🌐",
  },
  {
    category: "Data Visualization",
    skills: ["Power BI", "Tableau", "MS Excel"],
    icon: "📊",
  },
];

const Skills = () => {
  return (
    <section className="padding" id="skills">
      <div
        style={{
          paddingBottom: "3rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
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
          Technical Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
          className="animate-fade-in-stagger"
        >
          {skillCategories.map((cat, index) => (
            <div
              key={cat.category}
              className="glass-card"
              style={{
                padding: "2rem",
                animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "1.75rem" }}>{cat.icon}</span>
                <h3
                  style={{
                    margin: 0,
                    color: "#2563EB",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    letterSpacing: "0.3px",
                  }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {cat.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    style={{
                      backgroundColor: "#2563EB",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      transform: "translateZ(0)",
                      cursor: "default",
                      animation: `scaleIn 0.4s ease-out ${0.05 * idx}s both`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1E40AF";
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(37, 99, 235, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#2563EB";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Gradient Line at Top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #2563EB, #F59E0B)",
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
