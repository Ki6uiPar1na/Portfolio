import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nasa Space Apps Challenge 2024",
    description:
      "Today, the world faces two interconnected challenges: climate change and gender inequality. While they may seem separate, climate change worsens existing inequalities, particularly for women in vulnerable communities. At CheckMate Beta, we aim to address both of these critical issues with innovative, sustainable solutions that empower women to take action against climate change.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Vercel"],
    demoUrl: "https://ki6uipar1na.github.io/portfolio", 
    githubUrl: "https://github.com/Ki6uiPar1na/NASA-Space-Apps-Challenge-2024",
  },
  {
    id: 2,
    title: "Kingdom Of Soldier Game Project",
    description:
      "This is project made by Md. Khairul Islam and Mst. Rokeya Akther Supervised by Dr. A. H. M. Kamal , Professor, Jatiya Kabi Kazi Nazrul Islam University.",
    image: "/projects/ctf-writeups.png",
    tags: ["Java", "Python3"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ki6uiPar1na/Kingdom-Of-Soldier-Game-Project",
  }, 
  {
    id: 3,
    title: "Nasa Space Apps Challenge 2024",
    description:
      "Today, the world faces two interconnected challenges: climate change and gender inequality. While they may seem separate, climate change worsens existing inequalities, particularly for women in vulnerable communities. At CheckMate Beta, we aim to address both of these critical issues with innovative, sustainable solutions that empower women to take action against climate change.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Vercel"],
    demoUrl: "https://ki6uipar1na.github.io/portfolio", 
    githubUrl: "https://github.com/Ki6uiPar1na/NASA-Space-Apps-Challenge-2024",
  }
];

export const ProjectsSection = () => {
  // State to track expanded project descriptions by project id
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isExpanded = expanded[project.id] || false;
            const maxLines = 3;

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                  <p
                    className={`text-muted-foreground text-sm mb-4 whitespace-pre-line ${
                      !isExpanded ? `line-clamp-${maxLines}` : ""
                    }`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: isExpanded ? "none" : maxLines.toString(),
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* See More / Less button */}
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-primary text-sm font-medium hover:underline self-start"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}

                  <div className="flex justify-between items-center mt-auto pt-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ki6uiPar1na"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
