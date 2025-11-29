import React, { useEffect, useState } from "react";

const links = [
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export default function Navbar(){
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || "light");

  useEffect(()=>{
    const sections = ["projects","resume","contact","skills"];
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          setActive(e.target.id);
        }
      });
    }, { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 });

    sections.forEach(id=>{
      const el = document.getElementById(id);
      if(el) obs.observe(el);
    });

    return ()=> obs.disconnect();
  },[]);

  function scrollToId(id){
    const el = document.getElementById(id);
    if(!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleTheme(){
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <header className="navbar-custom">
      <a className="brand" href="#" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}}>Subash P</a>

      <div style={{display:"flex",alignItems:"center"}}>
        <div className="navlinks" style={{display:"flex",alignItems:"center"}}>
          <a href="#projects" onClick={(e)=>{e.preventDefault(); scrollToId("projects")}} className={active==="projects" ? "active":""}>Projects</a>
          <a href="#resume" onClick={(e)=>{e.preventDefault(); scrollToId("resume")}} className={active==="resume" ? "active":""}>Resume</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollToId("contact")}} className={active==="contact" ? "active":""}>Contact</a>
        </div>

        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
}
