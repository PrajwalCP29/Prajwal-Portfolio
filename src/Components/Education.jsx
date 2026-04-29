/**
 * Modern Education component with timeline design
 *
 * Displays educational background with smooth animations
 */

import React from "react";

const educationData = [
  {
    degree: "B.Tech. in Data Science",
    institution: "G.H. Raisoni College of Engineering, Nagpur",
    period: "2022 - 2026",
    details: "CGPA: 8.27 / 10",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Certificate (HSC) - XII",
    institution: "Nirala Junior College, Nagpur",
    period: "2020 - 2021",
    details: "Percentage: 88.67%",
    icon: "📚",
  },
  {
    degree: "Secondary School Certificate (SSC) - X",
    institution: "Vivek Mandir High School, Gondia",
    period: "2018 - 2019",
    details: "Percentage: 84.40%",
    icon: "✏️",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <div
        style={{
          maxWidth: "900px",
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
          Education
        </h2>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            paddingLeft: "2rem",
          }}
        >
          {/* Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: 0,
              bottom: 0,
              width: "3px",
              background: "linear-gradient(180deg, #2563EB 0%, #F59E0B 100%)",
              borderRadius: "2px",
            }}
          />

          {/* Education Items */}
          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              style={{
                marginBottom: "3rem",
                position: "relative",
                animation: `fadeInUp 0.6s ease-out ${0.15 * index}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
              className="glass-card"
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2.5rem",
                  top: "1.5rem",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#2563EB",
                  border: "4px solid white",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 3px #2563EB",
                  zIndex: 2,
                }}
              />

              {/* Content */}
              <div
                style={{
                  padding: "1.5rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(37, 99, 235, 0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🎓</span>
                  <div>
                    <h3
                      style={{
                        margin: "0 0 0.5rem 0",
                        color: "#1F2937",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      style={{
                        margin: "0.25rem 0",
                        fontWeight: "600",
                        color: "#2563EB",
                        fontSize: "0.95rem",
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: "2.5rem",
                  }}
                >
                  <p
                    style={{
                      margin: "0.5rem 0 0.25rem 0",
                      color: "#6B7280",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#F59E0B" }}>📅</span>
                    {edu.period}
                  </p>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      color: "#4B5563",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
