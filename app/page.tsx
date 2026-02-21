"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Wrench, Shield, Pickaxe, Settings, Factory, Building2, Tractor, Truck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const produtos = [
    {
      titulo: "Peças Técnicas",
      descricao: "Usinagem e moldagem de precisão para reposição industrial.",
      icone: <Wrench className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
      colSpan: "md:col-span-2",
    },
    {
      titulo: "Revestimentos em PU",
      descricao: "Proteção contra abrasão e impacto para rolos e cilindros.",
      icone: <Shield className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
      colSpan: "md:col-span-1",
    },
    {
      titulo: "Mineração e Siderurgia",
      descricao: "Peneiras, raspadores e hidrociclones de alta durabilidade.",
      icone: <Pickaxe className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
      colSpan: "md:col-span-1",
    },
    {
      titulo: "Projetos Customizados",
      descricao: "Engenharia reversa e desenvolvimento sob medida para sua planta.",
      icone: <Settings className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
      colSpan: "md:col-span-2",
    },
  ];

  // ARRAY DE PARCEIROS ATUALIZADO COM AS SUAS LOGOS VETORIZADAS
  const parceiros = [
    { nome: "Alumar", icone: "/logos/logo-alumar.svg" },
    { nome: "Canopus", icone: "/logos/logo-canopus.svg" },
    { nome: "Dimensão", icone: "/logos/logo-dimensao.svg" },
    { nome: "CDC Consil", icone: "/logos/logo-cdcconsil.svg" },
    { nome: "EIP", icone: "/logos/logo-eip.svg" },
    { nome: "Equatorial", icone: "/logos/logo-equatorial.svg" },
    { nome: "Lua Nova", icone: "/logos/logo-luanova.svg" },
    { nome: "Lucena", icone: "/logos/logo-lucena.svg" },
    { nome: "Vale", icone: "/logos/logo-vale.svg" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section 
        className="w-full min-h-screen flex flex-col items-center justify-center relative px-6 py-20 bg-cover bg-center bg-no-repeat bg-fixed border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
        style={{ backgroundImage: "url('/fundo-hero.png')" }}
      >
        <div className="absolute inset-0 z-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-[2px] transition-colors duration-300" />

        <div className="z-10 text-center max-w-4xl space-y-6 mt-10">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Solidez em <span className="text-red-700 dark:text-red-600">Pré-moldados</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl text-slate-600 dark:text-slate-400 md:text-2xl font-light">
              Qualidade industrial para infraestrutura e urbanismo.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#produtos" className="px-8 py-3 bg-[#F15A24] hover:bg-orange-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-center shadow-md">
                Ver Catálogo
              </a>
              <a href="#contato" className="px-8 py-3 border border-slate-300 dark:border-slate-700 hover:border-teal-600 dark:hover:border-teal-500 text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 rounded-full transition-all duration-300 text-center bg-white dark:bg-slate-900/50 shadow-sm">
                Fale Conosco
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO LETREIRO - ATUALIZADA COM LOGOS SVG E EFEITO FADE */}
      <section className="w-full py-12 bg-white dark:bg-slate-900/30 border-b border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center z-10 transition-colors duration-300 relative">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8 text-center">
          Engenharia de confiança aprovada por grandes indústrias
        </p>
        
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Efeitos de Fade nas extremidades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />
          
          <motion.div
            className="flex gap-16 md:gap-28 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...parceiros, ...parceiros].map((parceiro, index) => (
              <img 
                key={index}
                src={parceiro.icone} 
                alt={parceiro.nome} 
                className="h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO: QUEM SOMOS / A EMPRESA */}
      <section id="empresa" className="w-full max-w-7xl px-6 py-24 z-10 border-b border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                A engenharia por trás da <span className="text-[#F15A24]">excelência</span>.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Com experiência sólida no desenvolvimento de soluções em poliuretano, a Contepol se consolidou como parceira estratégica das indústrias, minerações e construtoras do país. Nosso foco é resolver problemas complexos de desgaste, abrasão e impacto.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Mais do que fabricar peças, nós entregamos confiabilidade operacional. Nossa planta fabril conta com tecnologia para engenharia reversa e formulações customizadas que garantem a durabilidade extrema que o seu maquinário exige.
              </p>
              
              <div className="pt-6 flex flex-wrap gap-8">
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-500">+10</h4>
                  <p className="text-sm text-slate-500 font-medium mt-1">Anos de Mercado</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-500">+500</h4>
                  <p className="text-sm text-slate-500 font-medium mt-1">Projetos Entregues</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-500">100%</h4>
                  <p className="text-sm text-slate-500 font-medium mt-1">Nacional</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 animate-pulse flex flex-col items-center justify-center text-center p-6">
                <Factory className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-4" />
                <span className="text-slate-500 dark:text-slate-400 font-medium">Espaço reservado para foto da fábrica/equipe</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO BENTO GRID */}
      <section id="produtos" className="w-full max-w-6xl px-6 py-24 z-10 border-b border-slate-200 dark:border-slate-800">
        <Reveal>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Nosso Mostruário</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Versatilidade que atende às exigências mais extremas.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produtos.map((item, index) => (
            <div key={index} className={item.colSpan}>
              <Reveal delay={0.2 + (index * 0.1)}>
                <div className="h-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-300 p-8 rounded-3xl flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-md dark:shadow-none">
                  <div className="mb-6 bg-teal-50 dark:bg-teal-900/30 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {item.icone}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">{item.titulo}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.descricao}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

     {/* SEÇÃO NEWSLETTER TÉCNICA */}
      <section className="w-full max-w-5xl px-6 py-24 z-10 mx-auto">
        <Reveal>
          <div className="bg-slate-900 dark:bg-slate-900/50 border border-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F15A24]/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-[#F15A24]/20" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Mantenha sua planta <br />
                  <span className="text-[#F15A24]">sempre atualizada</span>.
                </h2>
                <p className="text-slate-400 text-lg">
                  Assine nossa newsletter técnica e receba em seu e-mail conteúdos exclusivos sobre manutenção preditiva e inovações em elastômeros.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F15A24] transition-all"
                  />
                  <button 
                    type="button"
                    className="px-8 py-4 bg-[#F15A24] text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg whitespace-nowrap"
                  >
                    Inscrever-se
                  </button>
                </form>
                <p className="text-xs text-slate-500 ml-2">
                  Prometemos não enviar spam. Apenas conhecimento técnico.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  );
}