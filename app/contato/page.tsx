"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contato() {
  const numeroWhatsApp = "5511999999999"; 
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de um orçamento.`;

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 pt-32 pb-24 transition-colors duration-300">
      <div className="w-full max-w-7xl px-6">
        
        {/* CABEÇALHO */}
        <Reveal className="mb-16 mt-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Fale com a <span className="text-[#F15A24]">Contepol</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Nossa engenharia está pronta para entender a sua demanda técnica e desenvolver a melhor solução em elastômeros.
          </p>
        </Reveal>

        {/* GRID PRINCIPAL - Alinhado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* COLUNA ESQUERDA: INFOS + MAPA */}
          <div className="flex flex-col gap-8 h-full">
            
            {/* Box de Informações */}
            <Reveal delay={0.2} className="flex-1 flex flex-col">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-l-4 border-[#F15A24] pl-4">
                  Contatos Diretos
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl text-[#F15A24]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Business</p>
                      <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 group">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl text-[#F15A24]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail Comercial</p>
                      <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">contato@contepol.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Box do Mapa Interativo */}
            <Reveal delay={0.3} className="flex-1 flex flex-col">
              <div className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-10 h-10 text-[#F15A24] animate-bounce" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Unidade Industrial</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-[280px]">
                  Santo André, São Paulo - Vila Metalúrgica
                </p>
                <a 
                  href="https://www.google.com.br/maps/search/Contepol+Tecnologia+em+Poliuretano" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#F15A24] text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
                >
                  <MapPin className="w-5 h-5" /> Abrir no Google Maps
                </a>
              </div>
            </Reveal>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO */}
          <Reveal delay={0.4} className="h-full">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl h-full flex flex-col">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Solicite um Orçamento</h3>
                <p className="text-slate-500 dark:text-slate-400">Preencha os dados abaixo para atendimento técnico.</p>
              </div>

              <form className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Seu Nome</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#F15A24] transition-all text-slate-800 dark:text-slate-200" placeholder="Ex: João Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Empresa</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#F15A24] transition-all text-slate-800 dark:text-slate-200" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#F15A24] transition-all text-slate-800 dark:text-slate-200" placeholder="contato@empresa.com.br" />
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Especificações Técnicas</label>
                  <textarea className="w-full flex-1 min-h-[150px] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#F15A24] transition-all text-slate-800 dark:text-slate-200 resize-none" placeholder="Descreva a peça ou projeto..."></textarea>
                </div>
                
                <button type="button" className="w-full py-5 bg-[#F15A24] text-white font-bold text-xl rounded-2xl hover:bg-orange-600 transition-all shadow-lg transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" /> Enviar Mensagem Técnica
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </main>
  );
}