"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contato() {
  const numeroWhatsApp = "5598992351516"; // Número atualizado para o DDD 98
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de um orçamento para peças técnicas.`;

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 pt-32 pb-24 transition-colors duration-300 overflow-x-hidden">
      <div className="w-full max-w-7xl px-6">
        
        {/* TÍTULO DA PÁGINA */}
        <Reveal className="mb-16 mt-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Fale com a <span className="text-[#F15A24]">Contepol</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Referência em engenharia no Maranhão. Estamos prontos para atender sua demanda industrial.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* COLUNA ESQUERDA: INFOS + MAPA */}
          <div className="flex flex-col gap-8 h-full">
            
            {/* Box de Informações de Contato */}
            <Reveal delay={0.2} className="flex-1 flex flex-col">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-l-4 border-[#F15A24] pl-4">
                  Contatos Oficiais
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl text-[#F15A24]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp / Comercial</p>
                      <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">(98) 99235-1516</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 group">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl text-[#F15A24]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail Corporativo</p>
                      <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">comercial@contepol.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Box do Mapa com Endereço de São Luís */}
            <Reveal delay={0.3} className="flex-1 flex flex-col">
              <div className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-10 h-10 text-[#F15A24] animate-bounce" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Fábrica São Luís</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-[320px]">
                  Rua Doze, nº 02, Mod 01, Distrito Industrial<br/>
                  São Luís - MA | CEP: 65090-260
                </p>
                {/* Link direto para a unidade de São Luís para evitar endereços errados */}
                <a 
                  href="https://www.google.com/maps/dir//Contepol+-+Construções,+Indústria+e+Pré-moldados+LTDA+-+Rua+Doze,+2+-+Distrito+Industrial,+São+Luís+-+MA,+65090-260" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#F15A24] text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" /> Ver Localização Exata
                </a>
              </div>
            </Reveal>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO */}
          <Reveal delay={0.4} className="h-full">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl h-full flex flex-col">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Solicite um Orçamento</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Envie sua demanda para nossa equipe técnica.</p>
              </div>

              <form className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Seu Nome</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200" placeholder="Ex: João Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Empresa</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200" placeholder="contato@empresa.com.br" />
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mensagem</label>
                  <textarea className="w-full flex-1 min-h-[150px] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200 resize-none" placeholder="Detalhes do projeto..."></textarea>
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