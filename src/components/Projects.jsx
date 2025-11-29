import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// Real projects (ordered by resume priority)
const projects = [
  {
    id: "media",
    title: "Media & Entertainment — AWS DevOps (US Client)",
    short: "Cloud infra, EKS deployments, CI/CD & serverless workflows for a US media client.",
    details:
      "Designed and maintained multi-environment AWS infrastructure for a US media & entertainment client. " +
      "Implemented EKS-based microservice deployments with Helm, Jenkins and Azure DevOps pipelines, built event-driven APIs using Lambda + API Gateway, and integrated SQS/SNS for async workflows. Implemented monitoring (CloudWatch + Prometheus + Grafana) and runbooks for on-call.",
    image: "/src/assets/media-project.png",
    bullets: [
      "Multi-environment infra (dev/stage/prod) using Terraform modules",
      "EKS clusters with managed node groups, autoscaling and secure network policies",
      "Jenkins & Azure DevOps pipelines for build, test and deploy",
      "Serverless APIs (Lambda + API Gateway) and async messaging (SQS/SNS)",
      "Monitoring & alerts: CloudWatch, Prometheus & Grafana"
    ],
    link: "#"
  },
  {
    id: "timesheet",
    title: "Timesheet Management App (Internal)",
    short: "React frontend + Docker + Jenkins CI/CD — internal productivity tool.",
    details:
      "Built and shipped an internal Timesheet & Attendance application used by the company. The app includes OTP login, role-based screens (employee, manager, admin), timesheet export, and payroll-ready exports. Containerised with Docker and deployed through Jenkins pipelines to multi-environments.",
    image: "/src/assets/timesheet.png",
    bullets: [
      "Frontend in React.js with secure OTP login",
      "REST API integration and state management",
      "Dockerised app and automated CI/CD pipelines with Jenkins",
      "Features: attendance, approvals, PDF/Excel export"
    ],
    link: "#"
  },
  {
    id: "infra",
    title: "AWS Infra Automation — Terraform (GitHub)",
    short: "Modular Terraform repository: VPC, Bastion, EKS module, RDS + Azure pipeline validation.",
    details:
      "Full modular Terraform repository with VPC, public/private subnets, bastion host, EKS module structure and RDS MySQL. Implemented remote backend (S3 + DynamoDB), workspaces for environments, and CI checks (terraform fmt/validate) via Azure Pipelines.",
    image: "/src/assets/architecture.png",
    bullets: [
      "Modular structure: vpc, eks, rds, bastion modules",
      "Remote backend & workspace strategy",
      "CI: terraform fmt, init, validate in Azure Pipelines",
      "Designed for production-ready extension"
    ],
    link: "https://github.com/subashp-96/aws-infra-terraform.git"
  },
  {
    id: "monitor",
    title: "Monitoring & Observability",
    short: "Prometheus + Grafana + Loki setup for EKS workloads.",
    details:
      "Implemented monitoring stack for EKS workloads using Prometheus, Grafana, and Loki for logs. Configured dashboards, alerting rules, and runbooks to improve incident response and SLO observability.",
    image: "/src/assets/monitor.png",
    bullets: [
      "Prometheus metrics scraping for app + infra",
      "Grafana dashboards for SLOs and alerts",
      "Loki for centralized logs and queries",
      "Alertmanager routing and escalation policies"
    ],
    link: "#"
  }
];

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <>
      <div className="grid-3">
        {projects.map((p) => (
          <div key={p.id} data-aos="fade-up">
            <ProjectCard
              title={p.title}
              short={p.short}
              onDetails={() => setModalProject(p)}
              repoLink={p.link}
            />
          </div>
        ))}
      </div>

      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </>
  );
}
