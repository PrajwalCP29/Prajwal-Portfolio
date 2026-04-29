/**
 * Modern Home component - Hero Section
 *
 * The section at the top of the page displaying name, title, and call-to-action
 * with modern gradient overlay and smooth animations
 */

import React, { useEffect, useState } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

const imageAltText = "Professional developer workspace";

const Home = ({ name, title }) => {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleParallax = () => {
      setParallaxOffset(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section
      id="home"
      className="min-height"
      style={{
        overflowY: "hidden",
        position: "relative",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)",
      }}
    >
      {/* Animated Background - Code Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(37, 99, 235, 0.5) 2px,
              rgba(37, 99, 235, 0.5) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(37, 99, 235, 0.5) 2px,
              rgba(37, 99, 235, 0.5) 4px
            )
          `,
          animation: "pan 20s linear infinite",
          zIndex: 0,
        }}
      />

      {/* Floating Code Elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Floating code boxes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              padding: "1rem",
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              color: "rgba(37, 99, 235, 0.6)",
              backdropFilter: "blur(10px)",
              left: `${(i * 23 + 10) % 100}%`,
              top: `${(i * 17 + 15) % 100}%`,
              animation: `float 6s ease-in-out ${i * 0.5}s infinite`,
              opacity: 0.3,
            }}
          >
            {"<code />"}
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.4) 0%, rgba(30, 64, 175, 0.5) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          top: "3rem",
          left: "2rem",
          width: "clamp(20rem, 90vw, 25rem)",
          animation: "fadeInDown 0.8s ease-out",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            textShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            color: "#F59E0B",
            paddingTop: "0.5rem",
            fontWeight: "600",
            fontSize: "1.25rem",
            letterSpacing: "0.5px",
            animation: "fadeInUp 0.9s ease-out 0.2s both",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {title}
        </h2>

        {/* Decorative Line */}
        <div
          style={{
            marginTop: "1.5rem",
            height: "4px",
            width: "60px",
            background: "linear-gradient(90deg, #2563EB, #F59E0B)",
            borderRadius: "2px",
            animation: "slideInLeft 0.6s ease-out 0.4s both",
            boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)",
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <img
          src={arrowSvg}
          style={{
            height: "3rem",
            width: "3rem",
            filter: "drop-shadow(0 4px 8px rgba(37, 99, 235, 0.5))",
          }}
          alt="Scroll down"
        />
      </div>

      <style>{`
        @keyframes pan {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
