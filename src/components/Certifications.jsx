import React from "react";

export default function Certifications() {
  return (
    <div className="resume-box fade-up">
      <h3>Terraform Associate Certification</h3>

      <p style={{ color: "var(--muted)", marginTop: "8px" }}>
        Issued by HashiCorp • Verified PDF Certificate
      </p>

      <a
        className="btn-primary"
        href="/src/assets/terraform-certificate.pdf"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "16px", display: "inline-block" }}
      >
        View Certificate (PDF)
      </a>
    </div>
  );
}
