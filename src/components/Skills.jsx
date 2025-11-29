import React from "react";
const skills = [
  "AWS", "Terraform", "VPC", "EC2", "RDS", "EKS",
  "Docker", "Kubernetes", "Helm",
  "Jenkins", "Azure DevOps", "GitHub",
  "Linux", "Networking", "Monitoring"
];

export default function Skills(){
  return (
    <div className="grid-3" data-aos="fade-up">
      {skills.map(s=>(
        <div className="skill-card" key={s}>{s}</div>
      ))}
    </div>
  );
}
