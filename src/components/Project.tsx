import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
  return (
    <div className="project-item mb-4">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-title">
          <h4 className="text-xl font-semibold">{title}</h4>
        </a>
      ) : (
        <h4 className="text-xl font-semibold">{title}</h4>
      )}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Project;