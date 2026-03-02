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
              <a 
  href="https://wa.me/5598992351516?text=Olá,%20estou%20no%20site%20da%20Contepol%20e%20gostaria%20de%20falar%20com%20o%20setor%20comercial!" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group"
>
  {/* Ícone Oficial do WhatsApp em SVG (Pintado com o verde original) */}
  <svg 
    className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform duration-300" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
  Fale no WhatsApp
</a>
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
                <p className="text-3xl font-bold text-[#00A884]">+20</p>
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