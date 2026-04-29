/**
 * Dark Mode Toggle component
 *
 * Allows users to switch between light and dark themes
 */

import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = savedMode ? JSON.parse(savedMode) : prefersDark;
    setIsDarkMode(shouldBeDark);
    applyDarkMode(shouldBeDark);
  }, []);

  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    applyDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: isDarkMode ? "#1E293B" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#1F2937",
        fontSize: "1.5rem",
        cursor: "pointer",
        boxShadow: isDarkMode
          ? "0 10px 30px rgba(0, 0, 0, 0.3)"
          : "0 10px 30px rgba(0, 0, 0, 0.1)",
        border: `2px solid ${isDarkMode ? "#334155" : "#E5E7EB"}`,
        transition: "all 0.3s ease",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
