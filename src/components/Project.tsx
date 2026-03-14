import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  dates?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, dates }) => {
  return (
    <div className="project-item">
      <div className="project-header">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-title">
            {title}
          </a>
        ) : (
          <span className="project-title">{title}</span>
        )}
        {dates && <span className="date">{dates}</span>}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Project;
