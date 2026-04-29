/**
 * Modern Certifications component
 *
 * Professional certifications with glassmorphism design
 */

import React from "react";

const certificationsData = [
  {
    title: "Google Business Intelligence Specialization",
    issuer: "Coursera (2025)",
    description:
      "Developed skills in BI, ETL, data modeling, and Tableau dashboards to deliver actionable insights.",
    icon: "🏆",
    color: "#2563EB",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    description:
      "Completed virtual job simulation focused on data cleaning, analysis, and visualization for client case studies.",
    icon: "📊",
    color: "#F59E0B",
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "AWS",
    description:
      "Engaged in simulated project to design and propose scalable and resilient cloud architecture on AWS.",
    icon: "☁️",
    color: "#10B981",
  },
];

const Certifications = () => {
  return (
    <section className="padding" id="certifications">
      <div
        style={{
          maxWidth: "1000px",
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
          Certifications & Specializations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
          className="animate-fade-in-stagger"
        >
          {certificationsData.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card"
              style={{
                padding: "2rem",
                animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(37, 99, 235, 0.2)";
                e.currentTarget.querySelector(".cert-icon").style.transform =
                  "scale(1.2) rotate(10deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.1)";
                e.currentTarget.querySelector(".cert-icon").style.transform =
                  "scale(1) rotate(0deg)";
              }}
            >
              {/* Icon */}
              <div
                className="cert-icon"
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  transition: "all 0.3s ease",
                }}
              >
                {cert.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  color: "#1F2937",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  lineHeight: "1.3",
                }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p
                style={{
                  margin: "0.5rem 0",
                  color: cert.color,
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                {cert.issuer}
              </p>

              {/* Description */}
              <p
                style={{
                  margin: "1rem 0 0 0",
                  color: "#6B7280",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                {cert.description}
              </p>

              {/* Accent Line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${cert.color}, #F59E0B)`,
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

export default Certifications;
