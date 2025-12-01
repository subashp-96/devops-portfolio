import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero(){
  return (
    <div className="hero">
      <div className="hero-text" data-aos="fade-up">
        <h1 className="hero-title">Subash P</h1>
        <p className="hero-sub">DevOps Engineer — AWS | Terraform | Docker | Kubernetes | CI/CD</p>
        <p style={{marginTop:16,color:"var(--muted)"}}>
          DevOps Engineer with 4+ years of experience in cloud automation, infrastructure-as-code,
          containerization and CI/CD pipelines. I build infrastructure, secure pipelines and observability.
        </p>

        <div className="hero-cta" style={{marginTop:20}}>
          <a className="btn-primary" href="#projects" onClick={(e)=>{e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'})}}>View Projects</a>
          <a className="btn-outline" href="/src/assets/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>

      <div className="hero-img" data-aos="zoom-in">
        {/* <img src={profile} alt="Subash"/> */}
      </div>
    </div>
  );
}
