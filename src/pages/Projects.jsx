import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Quora Clone",
      desc: "Q&A platform with login, upvote, and search features.",
      github: "#",
      live: "#",
    },
    {
      title: "SSSR Impex",
      desc: "Logistics business site built in React.",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div id="projects" className="py-16 px-4 bg-background text-white">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectList.map((p, idx) => (
          <div
            key={idx}
            className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <div className="flex gap-4">
              <a href={p.github} className="text-primary hover:underline" target="_blank">GitHub</a>
              <a href={p.live} className="text-primary hover:underline" target="_blank">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
