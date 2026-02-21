"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const parceiros = [
  { nome: "Alumar", icone: "/logos/logo-alumar.svg" },
  { nome: "Canopus", icone: "/logos/logo-canopus.svg" },
  { nome: "Dimensão", icone: "/logos/logo-dimensao.svg" },
  { nome: "Edeconsil", icone: "/logos/logo-edeconsil.svg" },
  { nome: "EIP", icone: "/logos/logo-eip.svg" },
  { nome: "Equatorial", icone: "/logos/logo-equatorial.svg" },
  { nome: "Lua Nova", icone: "/logos/logo-luanova.svg" },
  { nome: "Lucena", icone: "/logos/logo-lucena.svg" },
  { nome: "Vale", icone: "/logos/logo-vale.svg" },
];

export default function Home() {
  return (
    // Adicionado dark:bg-slate-950 aqui no main
    <main className="flex min-h-screen flex-col bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 transition-opacity">
          <img 
            src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" 
            alt="Fábrica" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
              Solidez em <span className="text-[#F15A24]">Pré-moldados.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 transition-colors">
              Qualidade industrial para infraestrutura e urbanismo com o selo de excelência Contepol.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produtos" className="px-8 py-4 bg-[#F15A24] text-white font-bold rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20">
                Ver Catálogo
              </Link>
              <Link href="/contato" className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Fale Conosco
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- LETREIRO DE LOGOS --- */}
      <section className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 relative transition-colors">
        <div className="container mx-auto px-6 mb-10">
          <p className="text-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">
            ENGENHARIA DE CONFIANÇA APROVADA POR GRANDES INDÚSTRIAS
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          {/* Efeitos de Fade com suporte ao dark mode */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

          <motion.div 
            className="flex gap-16 md:gap-32 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...parceiros, ...parceiros].map((parceiro, index) => (
              <img 
                key={index}
                src={parceiro.icone} 
                alt={parceiro.nome} 
                // Brilho branco suave ativado no dark mode (dark:drop-shadow-...)
                className="h-12 md:h-16 w-auto drop-shadow-sm dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:drop-shadow-md hover:scale-110 transition-all duration-300 cursor-pointer" 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SEÇÃO SOBRE / ESTATÍSTICAS --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors">
                A engenharia por trás da <br/> <span className="text-[#F15A24]">excelência.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg transition-colors">
                Com experiência sólida no desenvolvimento de soluções em concreto, a Contepol se consolidou como parceira estratégica de construtoras e indústrias no Maranhão. Nosso foco é precisão técnica e durabilidade extrema.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-[#00A884]">+10</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Anos de Mercado</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-[#00A884]">+500</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Projetos Entregues</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-[#00A884]">100%</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nacional</p>
              </div>
            </div>
          </div>
          <Reveal delay={0.4}>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl aspect-video flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-400 shadow-inner transition-colors">
              <p className="font-medium italic">Espaço reservado para foto da fábrica/equipe</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- MOSTRUÁRIO --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20 transition-colors">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Nosso Mostruário</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors">Versatilidade que atende às exigências mais extremas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-800/50 transition-all group h-full flex flex-col">
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 text-[#00A884] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F15A24] group-hover:text-white transition-colors shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Peças Técnicas</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">Moldagem de precisão em concreto para reposição industrial, saneamento e demandas específicas.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-800/50 transition-all group h-full flex flex-col">
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 text-[#00A884] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F15A24] group-hover:text-white transition-colors shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Infraestrutura</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">Soluções completas para drenagem, pavimentação intertravada, meio-fio e obras viárias de grande porte.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="py-24 container mx-auto px-6">
        <Reveal>
          <div className="bg-slate-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15A24]/20 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A884]/10 blur-[120px] rounded-full -ml-48 -mb-48" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Mantenha sua planta <br/> <span className="text-[#F15A24]">sempre atualizada.</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg font-medium">
                Assine nossa newsletter técnica e receba conteúdos exclusivos sobre infraestrutura e inovações em concreto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu e-mail corporativo" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#F15A24] focus:bg-white/10 transition-all placeholder:text-slate-500"
                />
                <button className="bg-[#F15A24] text-white font-bold px-10 py-5 rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-600/20">
                  Inscrever-se
                </button>
              </div>
              <p className="text-slate-500 text-sm mt-6 italic">Prometemos não enviar spam. Apenas conhecimento técnico.</p>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  );
}