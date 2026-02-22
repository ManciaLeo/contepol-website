"use client";

import React from 'react';
import { Zap, ShieldCheck, Map, Building2, Factory, Tractor } from 'lucide-react';

// Nosso "Banco de Dados" de Produtos da Contepol
const catalogo = [
  {
    nome: "Poste de concreto D ",
    desc: "Poste de Concreto D (100 a 200 dAN) – (até 12 metros) Poste duplo T tipo D, é utilizado para rede de distribuição de energia elétrica. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Poste de concreto DT tipo B ",
    desc: "Poste de Concreto DT tipo B/BT (300 a 3.500 dAN) – (Até 36 metros) Poste duplo T tipo B, utilizado para rede de distribuição de energia elétrica. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Poste de concreto circular CR ",
    desc: "Poste Cônico tipo CR (100 a 300 dAN) – poste circular tipo CR, é utilizado para iluminação pública. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Poste de concreto circular R ",
    desc: "Poste Cônico tipo R (300 a 6.000 dAN) – poste circular tipo R, é utilizado para rede de distribuição de energia elétrica. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Poste de concreto retangular A ",
    desc: "Poste de Concreto retangular tipo A (2000 a 8.000 dAN) – poste retangular tipo A, é utilizado para rede de distribuição de energia elétrica. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Cruzeta Tipo T 1900 mm ",
    desc: "A Cruzeta Tipo T de Concreto Pré-Moldados é usada para redes elétrica de baixa e média tensão. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Cruzeta Tipo L 1700 mm ",
    desc: "A Cruzeta Tipo L de Concreto Pré-Moldados é usada para redes elétrica de baixa e média tensão. ",
    icone: <Zap className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Tubos de Concreto MF ",
    desc: "O Tubo de Concreto Simples MF é projetado para drenagem urbana e obras de infraestrutura que exigem eficiência no escoamento de grandes volumes de água. ",
    icone: <Map className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Estacas de Concreto ",
    desc: "Estaca de concreto é usada para sustentar e fixar a cerca no terreno.  Funciona como o “pilar” que mantem a estrutura firme. ",
    icone: <Building2 className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Meio-Fio de concreto ",
    desc: "Meio-fio de concreto é uma peça usada principalmente para separar a rua da calçada e dar acabamento às laterais do pavimento. ",
    icone: <Map className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Caixa de passagem antifurto ",
    desc: "É uma caixa usada em instalações elétricas ou de telecomunicação com sistema de proteção contra roubo de cabos. ",
    icone: <ShieldCheck className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Galpão Industrial ",
    desc: "É uma edificação ampla, com estrutura reforçada, projetada para atender atividades industriais, comerciais ou logísticas. ",
    icone: <Factory className="w-6 h-6 text-[#F15A24]" />
  },
  {
    nome: "Galpão Rural Simples ",
    desc: "Uma construção funcional e de baixo custo destinada a armazenamento e abrigo de veículos ou apoio de atividades comerciais e rurais. ",
    icone: <Tractor className="w-6 h-6 text-[#F15A24]" />
  }
];

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20 transition-colors duration-300">
      
      {/* HEADER DA PÁGINA */}
      <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A24] to-[#f5835e]">Soluções</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Catálogo completo de pré-moldados e infraestrutura de concreto. Engenharia de alta performance para os projetos mais exigentes do Brasil.
        </p>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogo.map((produto, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#F15A24]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de luz sutil no fundo do card ao passar o mouse */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl group-hover:bg-[#F15A24]/20 transition-all duration-500 -mr-10 -mt-10"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {produto.icone}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#F15A24] transition-colors">
                  {produto.nome}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                  {produto.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                  <a href="/contato" className="text-sm font-semibold text-[#F15A24] hover:text-[#d94b1b] flex items-center gap-2 group/btn">
                    Solicitar orçamento 
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}