import React from "react";
import certificatePDF from "../assets/terraform-certificate.pdf";

export default function Certifications() {
  return (
    <div className="resume-box fade-up">
      <h3>Terraform Associate Certification</h3>

      <p style={{ color: "var(--muted)", marginTop: "8px" }}>
        Issued by HashiCorp • Verified PDF Certificate
      </p>

      <a
        className="btn-primary"
        href={certificatePDF}
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "16px", display: "inline-block" }}
      >
        View Certificate (PDF)
      </a>
    </div>
  );
}
