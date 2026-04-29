/**
 * Modern Footer component
 *
 * Contact information and social links with glassmorphism effects
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    phone,
    primaryColor,
    twitter,
    youTube,
  } = props;

  const socialLinks = [
    { icon: envelopeIcon, href: `mailto:${email}`, alt: "email", show: email },
    { icon: gitHubIcon, href: `https://github.com/${gitHub}`, alt: "GitHub", show: gitHub },
    { icon: linkedInIcon, href: `https://www.linkedin.com/in/${linkedIn}`, alt: "LinkedIn", show: linkedIn },
    { icon: twitterIcon, href: `https://twitter.com/${twitter}`, alt: "Twitter", show: twitter },
    { icon: instagramIcon, href: `https://www.instagram.com/${instagram}`, alt: "Instagram", show: instagram },
    { icon: mediumIcon, href: `https://medium.com/@${medium}`, alt: "Medium", show: medium },
    { icon: youTubeIcon, href: `https://www.youtube.com/c/${youTube}`, alt: "YouTube", show: youTube },
    { icon: devDotToIcon, href: `https://dev.to/${devDotTo}`, alt: "Dev.to", show: devDotTo },
  ];

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 2rem 3rem",
        background: `linear-gradient(135deg, ${primaryColor} 0%, #1E40AF 100%)`,
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          pointerEvents: "none",
        }}
      />

      {/* Contact Information */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "1rem",
          zIndex: 1,
          animation: "fadeInDown 0.7s ease-out",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "1.75rem",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Get In Touch
        </h2>
        <p style={{ fontSize: "1rem", opacity: 0.95, marginBottom: "1.5rem" }}>
          Let's connect and create something amazing together
        </p>

        {/* Email and Phone */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "center",
            fontSize: "0.95rem",
          }}
        >
          {email && (
            <a
              href={`mailto:${email}`}
              style={{
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              ✉️ {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              style={{
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              📱 {phone}
            </a>
          )}
        </div>
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          zIndex: 1,
        }}
        className="animate-fade-in-stagger"
      >
        {socialLinks.map(
          (link, index) =>
            link.show && (
              <a
                key={link.alt}
                href={link.href}
                target={link.alt !== "email" ? "_blank" : undefined}
                rel={link.alt !== "email" ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.6s ease-out ${0.05 * index}s both`,
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255, 255, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  style={{
                    height: "24px",
                    width: "24px",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
            )
        )}
      </div>

      {/* Divider */}
      <div
        style={{
          width: "80%",
          maxWidth: "600px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          zIndex: 1,
        }}
      />

      {/* Credit */}
      <p
        style={{
          marginTop: 0,
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "0.9rem",
          zIndex: 1,
          letterSpacing: "0.5px",
        }}
        className="small"
      >
        © 2024 Created by <strong>{name}</strong> | All Rights Reserved
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
