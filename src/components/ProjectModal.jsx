import React from "react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-grid">
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ marginBottom: 8 }}>{project.title}</h3>
            <p style={{ color: "var(--muted)" }}>{project.details}</p>

            <ul style={{ marginTop: 10 }}>
              {project.bullets && project.bullets.map((b, i) => <li key={i} style={{ color: "var(--muted)", marginBottom: 6 }}>{b}</li>)}
            </ul>

            {project.link && project.link !== "#" && (
              <p style={{ marginTop: 8 }}>
                <a className="link-btn" href={project.link} target="_blank" rel="noreferrer">Open Repository</a>
              </p>
            )}
          </div>

          <div>
            <img src={project.image} alt={project.title} style={{ maxWidth: 360, borderRadius: 10 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
