"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Mail, Phone, MapPin, Send, Navigation } from "lucide-react";

export default function Contato() {
  const numeroWhatsApp = "5598992351516"; 
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de um orçamento para peças técnicas.`;
  
  // LINK OFICIAL E ESTÁVEL DO GOOGLE MAPS PARA A CONTEPOL EM SÃO LUÍS
  const linkMapsOficial = "https://www.google.com/maps/place/Contepol+-+Constru%C3%A7%C3%B5es,+Ind%C3%BAstria+e+Pr%C3%A9-moldados+LTDA/@-2.6453926,-44.2633758,17z/data=!3m1!4b1!4m6!3m5!1s0x7f038c3cc1ce08b:0x216448b0b5552321!8m2!3d-2.6453926!4d-44.2633758!16s%2Fg%2F11f021v_0v?entry=ttu";

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 pt-32 pb-24 transition-colors duration-300 overflow-x-hidden font-sans">
      <div className="w-full max-w-7xl px-6">
        
        {/* CABEÇALHO */}
        <Reveal className="mb-16 mt-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Fale com a <span className="text-[#F15A24]">Contepol</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Sede e Fábrica em São Luís, Maranhão. Tecnologia e precisão em poliuretano para todo o Brasil.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LADO ESQUERDO: INFOS E MAPA */}
          <div className="flex flex-col gap-8 h-full">
            
            {/* Box de Contatos */}
            <Reveal delay={0.2} className="flex-1 flex flex-col">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-l-4 border-[#F15A24] pl-4">
                  Canais de Atendimento
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl text-[#F15A24]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Comercial</p>
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

            {/* Box do Mapa (Placeholder Visual) */}
            <Reveal delay={0.3} className="flex-1 flex flex-col">
              <div className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 relative">
                  <MapPin className="w-10 h-10 text-[#F15A24] z-10 animate-bounce" />
                  <div className="absolute inset-0 bg-[#F15A24]/20 rounded-full animate-ping opacity-30" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Fábrica São Luís</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-[320px] font-medium leading-relaxed">
                  Rua Doze, nº 02, Mod 01, Distrito Industrial<br/>
                  São Luís - MA | CEP: 65090-260
                </p>
                
                {/* BOTÃO COM O LINK CORRIGIDO */}

                <a 
                  href={linkMapsOficial} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#F15A24] text-white px-10 py-5 rounded-2xl font-bold shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <Navigation className="w-5 h-5" /> Traçar Rota via Google Maps
                </a>
              </div>
            </Reveal>
          </div>

          {/* LADO DIREITO: FORMULÁRIO */}
          <Reveal delay={0.4} className="h-full">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl h-full flex flex-col">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Solicite um Orçamento</h3>
                <p className="text-slate-500 dark:text-slate-400">Preencha os dados abaixo para darmos início ao seu projeto.</p>
              </div>

              <form className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Seu Nome</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200" placeholder="Ex: João Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Empresa</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200" placeholder="contato@empresa.com.br" />
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Descrição do Pedido Técnico</label>
                  <textarea className="w-full flex-1 min-h-[150px] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-[#F15A24] outline-none transition-all text-slate-800 dark:text-slate-200 resize-none" placeholder="Informe as especificações da peça ou projeto..."></textarea>
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