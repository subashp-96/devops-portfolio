import resumeFile from "../assets/resume.pdf";

export default function ResumeSection() {
  return (
    <div className="resume-box" data-aos="fade-up">
      <h3>Download Resume</h3>
      <p style={{ color: "var(--muted)" }}>
        Full resume (PDF) with detailed experience, projects and contact info.
      </p>

      <a
        className="btn-primary"
        href={resumeFile}
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: 12, display: "inline-block" }}
      >
        Download PDF
      </a>
    </div>
  );
}
