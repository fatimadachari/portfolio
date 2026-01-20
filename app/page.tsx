"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ExternalLink, Linkedin, Mail,
  Code2, Database, Smartphone, Layout,
  Calendar, GraduationCap, Award, 
  HeartHandshake, LineChart, Globe,
  Terminal, Palette, Download, Send, 
  Container, RefreshCw, Triangle, TrainFront,
  Menu, X 
} from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experiência", href: "#experience" },
  { name: "Formação", href: "#education" },
  { name: "Contato", href: "#contact" },
];

const experience = [
  {
    id: 1,
    company: "JCSx Sistemas",
    role: "Desenvolvedora de Software",
    period: "Jul 2024 - Atual",
    description: "Liderança na reescrita completa de app legado em Java para .NET MAUI e desenvolvimento de módulos fiscais/operacionais em React.js/Next.js. Atuação em QA e Customer Success.",
    tech: [".NET MAUI", "Next.js", "Electron.js", "Zebra Integrations"]
  },
  {
    id: 2,
    company: "JCSx Sistemas",
    role: "Estagiária",
    period: "Jan 2024 - Jun 2024",
    description: "Desenvolvimento de componentes reutilizáveis em React e manutenção de legado em Java. Prototipagem de alta fidelidade no Figma.",
    tech: ["React.js", "Node.js", "Figma", "Java"]
  },
  {
    id: 3,
    company: "Farol Software",
    role: "Desenvolvedora de Software",
    period: "Jan 2022 - Mar 2023",
    description: "Modernização de sites com PHP Laravel e criação de App Corporativo de Ponto Eletrônico usando NestJS e React.",
    tech: ["PHP/Laravel", "NestJS", "TypeScript", "MySQL"]
  },
  {
    id: 4,
    company: "Farol Software",
    role: "Estagiária",
    period: "Ago 2021 - Dez 2021",
    description: "Criação de sistema de gerenciamento de tarefas (To-Do List) e suporte em PHP e banco de dados.",
    tech: ["React.js", "Node.js", "PHP", "MySQL"]
  }
];

const education = [
  {
    institution: "Estácio de Sá",
    degree: "Bacharelado em Engenharia de Software",
    period: "2024 - 2027 (Previsão)",
  },
  {
    institution: "Estácio de Sá",
    degree: "Tecnólogo em Ciência de Dados",
    period: "2025 - 2027 (Previsão)",
  },
  {
    institution: "Escola Técnica Estadual 25 de Julho",
    degree: "Técnico em Informática",
    period: "2019 - 2022",
  }
];

const courses = [
  { name: "C# (100h)", school: "Rocketseat", details: ".NET, API, DDD, Entity Framework, Azure" },
  { name: "IA para Devs (30h)", school: "Rocketseat", details: "LLMs, RAG, AWS Bedrock, Prompt Engineering" },
  { name: "Lógica de Programação (30h)", school: "Rocketseat", details: "Algoritmos, Estrutura de dados, Clean Code" },
];

const projects = [
  {
    id: 1,
    title: "CryptoWatcher",
    category: "Fullstack",
    description: "Sistema de monitoramento de criptomoedas com alertas em tempo real.",
    tech: ["React.js", ".NET", "Redis", "RabbitMQ", "SendGrid"],
    repoUrl: "https://github.com/fatimadachari/CryptoWatcher",
    deployUrl: null,
  },
  {
    id: 2,
    title: "NutriPlan",
    category: "Fullstack",
    description: "SaaS para nutricionistas: gerenciamento de pacientes, cálculo automático de dietas e geração de PDFs profissionais.",
    tech: [".NET", "Next.js"],
    repoUrl: "https://github.com/fatimadachari/NutriPlan",
    deployUrl: null,
  },
  {
    id: 3,
    title: "SmartCondo",
    category: "Fullstack",
    description: "Plataforma SaaS Full-stack para gestão inteligente de condomínios.",
    tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/fatimadachari/smart-condo",
    deployUrl: "https://smart-condo.vercel.app/",
  },
  {
    id: 4,
    title: "CorpExpense",
    category: "Backend",
    description: "API RESTful para gerenciamento de reembolsos corporativos.",
    tech: [".NET", "SQLServer"],
    repoUrl: "https://github.com/fatimadachari/CorpExpense",
    deployUrl: null,
  },
  {
    id: 5,
    title: "CryptoTrend Predictor",
    category: "Dados",
    description: "Módulo de ML para previsão de preços de Bitcoin utilizando séries temporais e análise de volatilidade.",
    tech: ["Python", "Prophet", "Plotly", "Pandas", "YFinance"],
    repoUrl: "https://github.com/fatimadachari/crypto-trend-predictor",
    deployUrl: null,
  },
  {
    id: 6,
    title: "Mini Projetos",
    category: "Front-end",
    description: "Coleção de mini projetos desenvolvidos com React e Vite. Demonstra habilidades através de utilitários práticos como Calculadora de IMC, Regra de Três, Cronômetro e mais.",
    tech: ["JavaScript", "React.js"],
    repoUrl: "https://github.com/fatimadachari/mini-projetos",
    deployUrl: "https://fatimadachari.github.io/mini-projetos/",
  },
  {
    id: 7,
    title: "Quiz de JavaScript",
    category: "Front-end",
    description: "Uma aplicação interativa para testar conceitos da linguagem. Desenvolvido com foco no aprendizado, inspirado por Matheus Battisti.",
    tech: ["JavaScript", "React.js"],
    repoUrl: "https://github.com/fatimadachari/quiz",
    deployUrl: "https://fatimadachari.github.io/quiz",
  },
  {
    id: 8,
    title: "MarchJSChallenge",
    category: "Front-end",
    description: "Uma jornada de 31 dias criando 31 projetos em JavaScript. O desafio evolui dos fundamentos a técnicas avançadas, com exemplos práticos de desenvolvimento front-end e jogos.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    repoUrl: "https://github.com/fatimadachari/march-js-challenge",
    deployUrl: "https://fatimadachari.github.io/march-js-challenge",
  },
   {
    id: 9,
    title: "BarcodeScanner App",
    category: "Mobile & Desktop",
    description: "Aplicativo mobile corporativo com integração a coletores de dados Zebra.",
    tech: [".NET MAUI", "LiteDB", "Zebra Hardware"],
    repoUrl: null,
    deployUrl: null,
  },
   {
    id: 10,
    title: "MaxControle Web",
    category: "Front-end",
    description: "Sistema web ERP para gestão de vendas, financeiro e estoque.",
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    repoUrl: null,
    deployUrl: null,
  },
   {
    id: 11,
    title: "MaxControle Desktop",
    category: "Mobile & Desktop",
    description: "Sistema desktop ERP com módulo de Ponto de Venda (PDV).",
    tech: ["Electron.js", "React.js", "shadcn/ui"],
    repoUrl: null,
    deployUrl: null,
  },
  {
    id: 12,
    title: "FocusGoals",
    category: "Fullstack",
    description: "Extensão de produtividade que combina Pomodoro timer, bloqueio de sites e rastreamento de metas diárias.",
    tech: ["HTML", "CSS", "JavaScript", "Manifest V3", "Chrome Extensions AP"],
    repoUrl: "https://github.com/fatimadachari/focusgoals-extension",
    deployUrl: null,
  },
];

const softSkills = [
  {
    title: "Modernização de Sistemas",
    desc: "Expertise em transformar softwares legados em aplicações modernas, escaláveis e de alta performance.",
    icon: <RefreshCw size={24} />
  },
  {
    title: "Customer Success",
    desc: "Criação de materiais educativos e onboarding para facilitar a adoção do sistema pelo cliente.",
    icon: <HeartHandshake size={24} />
  },
  {
    title: "Visão Analítica",
    desc: "União da Engenharia de Software com Ciência de Dados para decisões baseadas em métricas.",
    icon: <LineChart size={24} />
  },
  {
    title: "Idiomas",
    desc: "Português (Nativo) e Inglês (Leitura/Escuta Avançadas) para documentação e pesquisa.",
    icon: <Globe size={24} />
  }
];

const tools = [
  { name: "Vercel", icon: <Triangle size={18} /> },
  { name: "Railway", icon: <TrainFront size={18} /> },
  { name: "Neon DB", icon: <Database size={18} /> },
  { name: "PostgreSQL", icon: <Database size={18} /> },
  { name: "Docker", icon: <Container size={18} /> },
  { name: "CI/CD", icon: <RefreshCw size={18} /> },
  { name: "Figma", icon: <Palette size={18} /> },
  { name: "Git/GitHub", icon: <Github size={18} /> },
  { name: "Zebra Hardware", icon: <Smartphone size={18} /> },
];

const categories = ["Todos", "Front-end", "Backend", "Fullstack", "Mobile & Desktop", "Dados"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para o menu mobile

  const filteredProjects = projects.filter(project =>
    activeCategory === "Todos" ? true : project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-black font-sans scroll-smooth overflow-x-hidden">

      {/* --- 0. NAVBAR FIXA --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo / Nome */}
          <a href="#" className="text-xl font-bold text-white tracking-tight hover:text-cyan-400 transition-colors">
            Fátima<span className="text-cyan-400">.</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile (Dropdown) */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsNavOpen(false)} // Fecha ao clicar
                    className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. Header / Hero Section */}
      <header className="container mx-auto px-6 py-32 md:py-40 flex items-center min-h-[90vh]" id="home">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Coluna de Texto (ESQUERDA) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-left"
          >
            <p className="text-cyan-400 tracking-widest font-mono mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-cyan-400 inline-block"></span>
              OLÁ, EU SOU
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              Fátima <br /> Dachari.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-8">
              Engenharia de Software <br /> & Ciência de Dados.
            </h2>
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-10 border-l-2 border-slate-800 pl-6">
              Desenvolvedora Full-Stack transformando ideias complexas em software de alto impacto.
              Construo ecossistemas digitais que unem uma engenharia sólida à inteligência estratégica de dados.
            </p>

            <div className="flex gap-4">
              <SocialLink href="https://github.com/fatimadachari" icon={<Github size={24} />} />
              <SocialLink href="https://www.linkedin.com/in/fatima-dachari" icon={<Linkedin size={24} />} />
              <SocialLink href="mailto:fatima.s.dachari@gmail.com" icon={<Mail size={24} />} />
            </div>
          </motion.div>

          {/* Coluna da Foto (DIREITA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-40"></div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] rounded-full border-[3px] border-slate-800 bg-slate-900 overflow-hidden shadow-2xl z-10">
                <img
                  src="/perfil.png"
                  onError={(e) => { e.currentTarget.src = "https://github.com/fatima-dachari.png" }}
                  alt="Foto de Fátima Dachari"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Badge Tech */}
              <div className="absolute -top-4 sm:top-12 -right-0 sm:-right-8 bg-slate-900/90 backdrop-blur-md p-2 sm:p-3 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3 animate-pulse scale-90 sm:scale-100">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <Code2 size={24} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Status</p>
                  <p className="text-sm font-bold text-white">Full-Stack Dev</p>
                </div>
              </div>

              {/* Badge Dados */}
              <div className="absolute -bottom-4 sm:bottom-16 -left-2 sm:-left-10 bg-slate-900/90 backdrop-blur-md p-2 sm:p-3 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3 scale-90 sm:scale-100">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <LineChart size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Foco</p>
                  <p className="text-sm font-bold text-white">Data Science</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </header>

      {/* 2. About Me & Toolbox */}
      <section className="container mx-auto px-6 py-24 border-y border-slate-900 bg-slate-900/10" id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-slate-950 p-8 rounded-lg border border-slate-800">
                <Code2 className="text-cyan-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">
                  A Intersecção entre Código e Dados
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Minha trajetória é definida pela expansão contínua. Comecei construindo para a web, expandi para o ecossistema mobile e agora mergulho na inteligência de dados.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Busco uma <strong>visão 360º</strong>: acredito que a verdadeira inovação acontece conectando interfaces bem construídas à inteligência dos dados. Não apenas entrego software; entrego soluções estrategicamente inteligentes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pl-0 md:pl-8"
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-cyan-400" />
              Ferramentas & DevOps
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-900 p-3 rounded border border-slate-800 text-sm text-slate-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors">
                  <span className="text-cyan-500/80">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section className="container mx-auto px-6 py-24" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h3 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">01.</span> Projetos Selecionados
          </h3>

          <div className="flex flex-wrap gap-2 justify-start md:justify-end mt-6 md:mt-0">
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
          className="min-h-[300px]"
        >
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-xl bg-slate-900/20"
            >
              <div className="bg-slate-800 p-4 rounded-full mb-4 opacity-50">
                <Code2 size={40} className="text-slate-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-300 mb-2">Em breve...</h4>
              <p className="text-slate-500 max-w-md">
                Ainda não adicionei projetos nesta categoria específica aqui no portfólio,
                mas tenho experiência na área! Baixe meu currículo para ver mais detalhes.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* 4. Skills Section */}
      <section className="bg-slate-900/30 py-20 border-y border-slate-800/50" id="skills">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <SkillCard icon={<Code2 />} title="Front-end" desc="React.js, Next.js, Tailwind" />
          <SkillCard icon={<Database />} title="Back-end" desc="NestJS, Laravel, .NET, Postgres" />
          <SkillCard icon={<Smartphone />} title="Mobile & Desktop" desc=".NET MAUI, React Native, Electron.js" />
          <SkillCard icon={<Layout />} title="Data Science" desc="Python, Pandas, ML" />
        </div>
      </section>

      {/* 5. Experience Section */}
      <section className="container mx-auto px-6 py-24" id="experience">
        <h3 className="text-3xl font-bold text-white mb-16 flex items-center gap-2">
          <span className="text-cyan-400">02.</span> Experiência Profissional
        </h3>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">
                  {exp.role} <span className="text-cyan-400 font-mono text-sm ml-2">@ {exp.company}</span>
                </h4>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-mono mt-1 md:mt-0">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-4 w-full">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="text-xs text-slate-300 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Education & Courses Section */}
      <section className="bg-slate-900/20 py-24" id="education">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-cyan-400">03.</span> Formação Acadêmica
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white font-bold">{edu.degree}</h4>
                      <p className="text-cyan-400 text-sm">{edu.institution}</p>
                    </div>
                    <GraduationCap className="text-slate-600" size={20} />
                  </div>
                  <p className="text-slate-500 text-sm font-mono mt-4">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-cyan-400">04.</span> Cursos & Certificações
            </h3>
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                  <div className="bg-cyan-500/10 p-2 rounded text-cyan-400 mt-1">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{course.name}</h4>
                    <p className="text-slate-500 text-xs mb-1">{course.school}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{course.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Diferenciais */}
      <section className="container mx-auto px-6 py-24">
        <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
          <span className="text-cyan-400">05.</span> Diferenciais
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all group"
            >
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Contact & CTA Section */}
      <section className="container mx-auto px-6 py-24 text-center" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Vamos construir algo incrível?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Estou disponível para projetos full-stack e desafios que envolvam análise de dados.
            Se você busca alguém que une engenharia robusta com insights analíticos, vamos conversar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* BOTÃO WHATSAPP */}
            <a
              href="https://wa.me/55992210575"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              <Send size={20} />
              Entrar em Contato
            </a>
            {/* BOTÃO CV */}
            <a
              href="/cv-fatima-dachari.pdf"
              download
              className="px-8 py-4 bg-transparent border border-slate-700 hover:border-white text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 hover:bg-slate-900"
            >
              <Download size={20} />
              Baixar Currículo
            </a>
          </div>
        </motion.div>
      </section>

      {/* 9. Footer */}
      <footer className="py-12 text-center border-t border-slate-900 bg-slate-950">
        <p className="text-slate-600 text-sm mb-2">© 2026 Fátima Dachari. All rights reserved.</p>
        <p className="text-slate-700 text-xs">Built with Next.js, Tailwind & Framer Motion</p>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SkillCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center p-4 hover:-translate-y-2 transition-transform duration-300">
      <div className="bg-slate-800 p-4 rounded-full mb-4 text-cyan-400 shadow-lg shadow-cyan-900/10">
        {icon}
      </div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string, icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}