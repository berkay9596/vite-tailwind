import React from "react";
import Card from "./Card";
const Projects = () => {
  const projects = [
    "DesoWheel",
    "DesoPixelArt",
    "Diamond Widget",
    "Dela Market Place",
    "Analybits",
    "Yeni E-Beyanname",
    "Türkiye Dijital Vergi Dairesi",
  ];
  return (
    <div id="projects">
      <h2
        style={{ color: "#33272a" }}
        className="text-center text-4xl font-semibold mt-16"
      >
        Projects
      </h2>
      <div className="container mt-8 flex w-full flex-wrap items-center justify-between">
        {projects.map((project) => (
          <Card project={project}></Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
