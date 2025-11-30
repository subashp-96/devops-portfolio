import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const toggleMenu = () => setOpenMenu(!openMenu);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <header className="navbar-custom">
      <a className="brand" onClick={() => scrollToId("top")}>Subash P</a>

      {/* Desktop menu */}
      <nav className="navlinks desktop">
        <a onClick={() => scrollToId("projects")}>Projects</a>
        <a onClick={() => scrollToId("resume")}>Resume</a>
        <a onClick={() => scrollToId("contact")}>Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>

      {/* Mobile hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <nav className="navlinks mobile">
          <a onClick={() => scrollToId("projects")}>Projects</a>
          <a onClick={() => scrollToId("resume")}>Resume</a>
          <a onClick={() => scrollToId("contact")}>Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      )}
    </header>
  );
}
