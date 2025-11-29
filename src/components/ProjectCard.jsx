import React from "react";

export default function ProjectCard({ title, short, onDetails, repoLink }) {
  return (
    <div className="project-card">
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "var(--muted)" }}>{short}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
        {repoLink && repoLink !== "#" && (
          <a className="link-btn" href={repoLink} target="_blank" rel="noreferrer">
            View Repo →
          </a>
        )}

        <button
          onClick={onDetails}
          style={{
            border: 0,
            background: "transparent",
            color: "var(--accent)",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}
