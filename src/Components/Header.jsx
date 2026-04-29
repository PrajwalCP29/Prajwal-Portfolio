/**
 * Modern Header component with glassmorphism effect
 *
 * Fixed sticky navigation bar with smooth transitions
 */
import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#certifications", label: "Certifications" },
    { href: "#footer", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    const sectionId = id.replace("#", "");
    setActiveLink(sectionId);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        padding: "1rem 2rem",
        zIndex: 100,
        background: scrolled
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 0, 0, 0.08)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          : "none",
        transition: "all 0.3s ease",
      }}
      className="modern-header"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => handleNavClick(link.href)}
          style={{
            color: activeLink === link.href.replace("#", "")
              ? "#2563EB"
              : "#6B7280",
            fontWeight: activeLink === link.href.replace("#", "") ? "600" : "500",
            fontSize: "0.95rem",
            letterSpacing: "0.3px",
            position: "relative",
            transition: "all 0.3s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#2563EB";
          }}
          onMouseLeave={(e) => {
            e.target.style.color =
              activeLink === link.href.replace("#", "")
                ? "#2563EB"
                : "#6B7280";
          }}
        >
          {link.label}
          {activeLink === link.href.replace("#", "") && (
            <span
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "0",
                right: "0",
                height: "3px",
                background: "linear-gradient(90deg, #2563EB, #1E40AF)",
                borderRadius: "2px",
                animation: "slideInRight 0.3s ease",
              }}
            />
          )}
        </a>
      ))}
    </header>
  );
};

export default Header;
