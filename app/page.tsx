"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Construction, Warehouse, Ruler, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// 1. ARRAY DE PARCEIROS COM SEUS NOVOS SVGS
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      
      {/* --- SEÇÃO HERO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
        {/* Detalhe de luz de fundo */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F15A24]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 z-10 text-center md:text-left">
          <div className="max-w-5xl">
            <Reveal>
              <span className="inline-block py-1 px-4 rounded-full bg-orange-500/10 text-[#F15A24] text-sm font-bold mb-6 border border-orange-500/20 uppercase tracking-widest">
                Engenharia em Concreto
              </span>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h1 className="text-6xl md:text-[120px] font-extrabold text-white mb-8 leading-[0.9] tracking-tighter">
                Concreto que <br/>
                <span className="text-[#F15A24]">constrói o futuro.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium">
                Pré-moldados de alta performance em São Luís para infraestrutura e grandes obras.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <Link href="/produtos" className="px-10 py-5 bg-[#F15A24] text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20 text-lg flex items-center justify-center gap-2 group">
                  Ver Catálogo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contato" className="px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all text-lg flex items-center justify-center">
                  Solicitar Orçamento
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- LETREIRO DE PARCEIROS (MARQUEE) --- */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
          <p className="text-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
            Grandes parceiros, grandes obras
          </p>
        </div>
        
        {/* Container do Letreiro */}
        <div className="flex overflow-hidden">
          <div className="flex gap-16 md:gap-32 animate-marquee whitespace-nowrap items-center py-4">
            {/* Renderizamos o array duas vezes para o loop infinito ser perfeito */}
            {[...parceiros, ...parceiros].map((parceiro, index) => (
              <div key={index} className="flex items-center gap-6 group cursor-default">
                <img 
                  src={parceiro.icone} 
                  alt={parceiro.nome} 
                  className="h-8 md:h-12 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                <span className="text-xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-[#F15A24] transition-colors uppercase tracking-tighter">
                  {parceiro.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE DIFERENCIAIS RÁPIDOS --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-[#F15A24]">
                <Construction className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Infraestrutura</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Peças robustas para saneamento, drenagem e pavimentação de larga escala.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-[#F15A24]">
                <Ruler className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Projetos Especiais</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Engenharia sob medida para demandas técnicas específicas em concreto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-[#F15A24]">
                <Warehouse className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Logística Ágil</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Localização estratégica no Distrito Industrial para atender todo o Maranhão.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}