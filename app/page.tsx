"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Linkedin, Mail, Code2, Database, Smartphone, Layout } from "lucide-react";

// --- DADOS DOS PROJETOS (Baseado no seu CV) ---
const projects = [
  {
    id: 1,
    title: "Reescrita App Mobile .NET MAUI",
    category: "Mobile",
    description: "Modernização completa de app legado Java para C#.NET MAUI com integração Zebra.",
    tech: ["C#", ".NET MAUI", "Android"],
    repoUrl: "https://github.com/fatima-dachari", // Coloque o link real depois
    deployUrl: null, // Sem deploy web pois é mobile
  },
  {
    id: 2,
    title: "Sistema de Gestão & NFPe",
    category: "Front-end",
    description: "Interface complexa para emissão de notas fiscais e gestão de ordens de serviço.",
    tech: ["React.js", "Next.js", "TypeScript"],
    repoUrl: "https://github.com/fatima-dachari",
    deployUrl: "https://exemplo.com", 
  },
  {
    id: 3,
    title: "To-Do List Fullstack",
    category: "Fullstack",
    description: "Gerenciador de tarefas completo com arquitetura MVC e banco de dados relacional.",
    tech: ["React.js", "Node.js", "MySQL"],
    repoUrl: "https://github.com/fatima-dachari",
    deployUrl: "https://exemplo.com",
  },
  {
    id: 4,
    title: "Análise de Dados com Python",
    category: "Dados",
    description: "Projeto de análise estatística e machine learning focado em insights preditivos.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    repoUrl: "https://github.com/fatima-dachari",
    deployUrl: null,
  }
];

// --- COMPONENTES ---

const categories = ["Todos", "Front-end", "Backend", "Fullstack", "Mobile", "Dados"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projects.filter(project => 
    activeCategory === "Todos" ? true : project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* Header / Hero Section */}
      <header className="container mx-auto px-6 py-24 flex flex-col items-start justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 tracking-widest font-mono mb-4">OLÁ, EU SOU</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Fátima Dachari.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            Engenharia de Software <br /> & Ciência de Dados.
          </h2>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-10">
            Desenvolvedora Full-Stack especializada em criar experiências digitais robustas. 
            Unifico a precisão do <strong className="text-cyan-400">.NET e React</strong> com a inteligência da <strong className="text-cyan-400">Ciência de Dados</strong>.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/fatima-dachari" target="_blank" className="p-3 border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/fatima-dachari" target="_blank" className="p-3 border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:fatima.s.dachari@gmail.com" className="p-3 border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </header>

      {/* Skills Section (Visual Minimalista) */}
      <section className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <SkillCard icon={<Code2 />} title="Front-end" desc="React, Next.js, TS" />
          <SkillCard icon={<Database />} title="Back-end" desc="Node, C#.NET, SQL" />
          <SkillCard icon={<Smartphone />} title="Mobile" desc=".NET MAUI, Android" />
          <SkillCard icon={<Layout />} title="Data Science" desc="Python, Pandas, ML" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-24" id="projetos">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h3 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">/</span> Projetos Selecionados
          </h3>
          
          {/* Filtros */}
          <div className="flex gap-2 overflow-x-auto pb-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${activeCategory === cat 
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Projetos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-cyan-400 border border-cyan-900 bg-cyan-950/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" className="text-slate-400 hover:text-white transition-colors" title="Ver Código">
                        <Github size={20} />
                      </a>
                    )}
                    {project.deployUrl && (
                      <a href={project.deployUrl} target="_blank" className="text-slate-400 hover:text-white transition-colors" title="Ver Projeto">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs text-slate-500 font-mono">
                    #{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm">
        <p>© 2026 Fátima Dachari. Construído com Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

// Componente auxiliar para os Cards de Skill
function SkillCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-slate-800 p-4 rounded-full mb-4 text-cyan-400">
        {icon}
      </div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}