
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  Globe, 
  Layout, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Target, 
  Rocket, 
  Cpu, 
  Sparkles, 
  Layers, 
  Database, 
  Network, 
  Terminal,
  Cpu as CpuIcon,
  ChevronRight,
  ArrowDown,
  Award,
  ShieldAlert
} from 'lucide-react';
import { BackgroundCells } from './components/ui/background-ripple-effect';

const Button = ({ children, className = "", onClick }: { children?: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`relative overflow-hidden bg-gradient-to-r from-[#00FF88] to-[#00D1FF] text-[#020202] font-black py-5 px-10 rounded-xl transition-all neon-glow-btn group flex items-center justify-center gap-3 uppercase tracking-widest text-sm md:text-base ${className}`}
  >
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
    {children}
  </button>
);

const SectionTitle = ({ children, highlight, subtitle, description, animate = false }: { children?: React.ReactNode, highlight?: string, subtitle?: string, description?: string, animate?: boolean }) => {
  const content = (
    <div className="text-center mb-20">
      {subtitle && <span className="text-[#00FF88] font-mono text-xs tracking-[0.3em] uppercase block mb-4">{subtitle}</span>}
      <h2 className="text-4xl md:text-6xl font-black leading-tight">
        {children}
        {highlight && <span className="text-gradient"> {highlight}</span>}
      </h2>
      {description && (
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
          {description}
        </p>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }
  return content;
};

const FAQAccordion: React.FC<{ item: { question: string, answer: string } }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 overflow-hidden rounded-2xl glass-panel transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#00FF88]' : 'text-gray-200'}`}>{item.question}</span>
        <div className={`p-2 rounded-full glass-panel transition-transform ${isOpen ? 'rotate-180 bg-[#00FF88]/10' : ''}`}>
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#00FF88]' : 'text-gray-500'}`} />
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 border-t border-white/5">
          <p className="text-gray-400 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [checklist, setChecklist] = useState([false, false, false, false]);

  const toggleCheck = (index: number) => {
    const newChecklist = [...checklist];
    newChecklist[index] = !newChecklist[index];
    setChecklist(newChecklist);
  };

  const benefits = [
    "Automatizar 100% dos seus processos repetitivos",
    "Escalar sua operação sem aumentar custos operacionais",
    "Ter controle total sobre suas métricas em tempo real",
    "Dominar ferramentas de elite ignoradas pela concorrência"
  ];

  const staticText = (
    <div className="flex items-center gap-8 whitespace-nowrap">
      {[...Array(8)].map((_, i) => (
        <span key={i} className="flex items-center gap-3 text-white font-black text-xs md:text-sm italic tracking-tighter uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]"></span>
          NOME DO <span className="text-[#00FF88] scale-110">PRODUTO</span> 2025
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen text-white selection:bg-[#00FF88] selection:text-black bg-[#020202]">
      
      {/* Hero Section com Background Ripple Effect */}
      <section className="relative w-full">
        <BackgroundCells>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-20 relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#00FF88]" />
              <span className="text-[#00FF88] font-mono text-[10px] uppercase tracking-widest font-bold">Protocolo V.25 Ativo</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter pointer-events-none">
              A Nova Era do <br />
              <span className="text-gradient">Sucesso Digital</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed pointer-events-none">
              Supere a concorrência com uma estrutura futurista de alta performance. Desenvolvido para quem busca supremacia absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
              <Button className="w-full sm:w-auto min-w-[280px]">
                Iniciar Operação <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </BackgroundCells>
      </section>

      {/* Futuristic Crossed Ribbons */}
      <div className="relative z-20 py-12 md:py-16 overflow-hidden bg-[#020202] flex flex-col items-center justify-center">
        <div className="absolute w-[180%] h-8 md:h-12 bg-black border-y border-white/10 flex items-center justify-center transform -rotate-[3deg] z-10">
          {staticText}
        </div>
        <div className="absolute w-[180%] h-8 md:h-12 bg-black border-y border-white/10 flex items-center justify-center transform rotate-[3deg] z-20">
          {staticText}
        </div>
      </div>

      {/* Interactive Assessment Section - COM EFEITO DE SCROLL */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            animate
            subtitle="Diagnóstico de Obstáculos" 
            highlight="SIM!"
            description="Responda com honestidade para identificar falhas no seu sistema atual."
          >
            Marque todas as perguntas cuja resposta seja
          </SectionTitle>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {[
              "Sente que está trabalhando muito, mas os resultados ainda não condizem com seu esforço?",
              "Já tentou diversos métodos que prometiam resultados rápidos e acabou se frustrando?",
              "Fica paralisado com o excesso de informações e não sabe o próximo passo?",
              "Gostaria de ter mais liberdade, mas não sabe como automatizar seus processos?"
            ].map((question, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -30 : 30 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => toggleCheck(idx)}
                className={`group flex items-center gap-6 p-8 rounded-[2rem] glass-panel cursor-pointer transition-all duration-500 ${checklist[idx] ? 'border-[#00FF88]/50 bg-[#00FF88]/5' : ''}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${checklist[idx] ? 'bg-[#00FF88] border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.5)]' : 'border-white/10 group-hover:border-[#00FF88]/30'}`}>
                  {checklist[idx] ? <CheckCircle2 className="w-6 h-6 text-black" /> : <div className="w-2 h-2 rounded-full bg-white/10"></div>}
                </div>
                <p className={`text-lg transition-all ${checklist[idx] ? 'text-white font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                  {question}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CpuIcon className="w-48 h-48 text-[#00FF88]" />
            </div>
            
            <p className="text-gray-400 text-lg mb-6 font-mono tracking-widest uppercase">Conclusão do Sistema:</p>
            <h3 className="text-3xl md:text-5xl font-black mb-10 uppercase italic tracking-tighter">
              Com o método <span className="text-[#00FF88]">você vai</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 text-left">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-4 glass-panel rounded-2xl border-white/5 group hover:border-[#00FF88]/30 transition-all">
                  <div className="mt-1 p-1 bg-[#00FF88]/20 rounded-lg group-hover:bg-[#00FF88] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88] group-hover:text-[#020202]" />
                  </div>
                  <p className="text-sm md:text-base text-gray-300 font-medium group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            
            <Button className="mx-auto">
              Fazer Upgrade do Sistema <ArrowRight className="w-5 h-5"/>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Focus Protocol Section - Estrutura Conectada com Animação de Scroll */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Arquitetura de Protocolos" highlight="na prática">Veja como funciona</SectionTitle>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="flex flex-col lg:flex-row items-stretch justify-center gap-0 relative"
          >
             {[
               { step: "Alpha", title: "Core Strategy", desc: "Arquitetura baseada em dados e inteligência de mercado para máxima conversão.", icon: <BookOpen className="w-7 h-7"/> },
               { step: "Beta", title: "Execution Engine", desc: "Implementação automatizada que reduz o erro humano a zero e acelera o tempo de resposta.", icon: <Zap className="w-7 h-7"/> },
               { step: "Omega", title: "Hyper Scaling", desc: "Protocolos de expansão exponencial para dominar seu setor com consistência.", icon: <Globe className="w-7 h-7"/> }
             ].map((item, i) => (
               <React.Fragment key={i}>
                 <motion.div 
                   variants={{
                     hidden: { opacity: 0, y: 50 },
                     visible: { opacity: 1, y: 0 }
                   }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="flex-1 group relative p-10 md:p-12 transition-all duration-700 glass-panel border-[#00FF88]/10 bg-gradient-to-b from-[#00FF88]/5 to-transparent z-10 hover:border-[#00FF88]/40 shadow-none hover:shadow-[0_0_30px_rgba(0,255,136,0.05)] rounded-[2.5rem] lg:first:rounded-r-none lg:last:rounded-l-none lg:odd:z-20"
                 >
                    <div className="flex justify-between items-start mb-10">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 bg-[#00FF88] text-[#020202] shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                          {item.icon}
                        </div>
                        <span className="font-mono text-xs text-[#00FF88]/60 transition-colors tracking-[0.5em] uppercase font-bold group-hover:text-[#00FF88]">{item.step}</span>
                    </div>
                    <h4 className="text-3xl font-black mb-5 tracking-tighter text-white">{item.title}</h4>
                    <p className="text-gray-400 text-base leading-relaxed mb-10 group-hover:text-gray-200 transition-colors">{item.desc}</p>
                    <div className="h-1.5 w-full bg-[#00FF88]/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-[#00FF88]/40 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite]"></div>
                        </div>
                    </div>
                 </motion.div>
                 
                 {/* Conector Desktop */}
                 {i < 2 && (
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="hidden lg:flex items-center justify-center -mx-4 z-30"
                    >
                      <div className="w-8 h-8 rounded-full glass-panel border-[#00FF88]/40 flex items-center justify-center bg-[#020202] shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                         <ChevronRight className="w-4 h-4 text-[#00FF88]" />
                      </div>
                    </motion.div>
                 )}

                 {/* Conector Mobile */}
                 {i < 2 && (
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="lg:hidden flex justify-center -my-6 py-4 z-30"
                    >
                      <div className="w-10 h-10 rounded-full glass-panel border-[#00FF88]/40 flex items-center justify-center bg-[#020202] shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                         <ArrowDown className="w-5 h-5 text-[#00FF88] animate-pulse" />
                      </div>
                    </motion.div>
                 )}
               </React.Fragment>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Componentes Core" highlight="receber">Tudo o que você vai </SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Phase 01", title: "Fundamentos Base", desc: "O alicerce tecnológico e estratégico para sua operação.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop" },
              { label: "Phase 02", title: "Engine de Performance", desc: "Sistemas de automação e workflows de alto rendimento.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop" },
              { label: "Phase 03", title: "Master Protocol", desc: "Estratégias avançadas de liderança e escala de mercado.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="group glass-panel rounded-3xl overflow-hidden p-3 transition-all duration-700 hover:border-[#00FF88]/50">
                 <div className="relative rounded-2xl overflow-hidden aspect-video mb-6">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-[8px] font-mono font-bold text-[#00FF88] uppercase tracking-widest border border-[#00FF88]/20">
                      {item.label}
                    </div>
                 </div>
                 <div className="px-6 pb-8">
                    <h4 className="text-xl font-black mb-3 uppercase tracking-tighter group-hover:text-[#00FF88] transition-colors">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Offer Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto relative">
           <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#00FF88]/30 rounded-tl-3xl"></div>
           <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#00D1FF]/30 rounded-br-3xl"></div>
           
           <div className="glass-panel rounded-[4rem] p-1 shadow-[0_0_80px_rgba(0,255,136,0.05)] border-white/10">
              <div className="bg-[#050505]/80 backdrop-blur-2xl rounded-[3.9rem] p-12 md:p-20 text-center">
                 <div className="inline-block glass-panel px-6 py-2 rounded-full border-[#00FF88]/20 text-[#00FF88] font-mono text-[10px] uppercase tracking-[0.4em] mb-12">
                   Oferta Especial de Lançamento
                 </div>
                 <h3 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter leading-tight">
                   Garanta o Seu <span className="text-gradient">Lugar na Vanguarda</span>
                 </h3>

                 <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-20 text-left max-w-2xl mx-auto">
                    {[
                      "Core Framework (Módulos 1-3)",
                      "Atualizações Vitalícias",
                      "Templates de Infraestrutura Cloud",
                      "Canal de Suporte Prioritário",
                      "Acesso à Comunidade Alpha",
                      "Escudo de Garantia de 7 Dias"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="p-1 rounded-md glass-panel border-[#00FF88]/30 group-hover:bg-[#00FF88] transition-all">
                            <CheckCircle2 className="w-4 h-4 text-[#00FF88] group-hover:text-[#020202]" />
                         </div>
                         <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                 </div>

                 <div className="mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00FF88]/10 blur-3xl -z-10"></div>
                    <p className="text-gray-500 line-through text-lg font-bold mb-4">Paradigma Antigo: R$ 997,00</p>
                    <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">Investimento Atual</p>
                    <div className="flex flex-col items-center">
                       <span className="text-gradient text-7xl md:text-9xl font-black tracking-tighter leading-none">R$ 297</span>
                       <span className="text-white/40 text-xs font-mono mt-6 uppercase tracking-[0.5em]">ou 12x de R$ 29,70</span>
                    </div>
                 </div>

                 <Button className="w-full py-8 text-xl tracking-[0.2em]">
                   Ativar Acesso Agora <Rocket className="w-6 h-6 ml-2" />
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* New Dedicated Guarantee Block */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel rounded-[4rem] p-12 md:p-20 relative overflow-hidden border-[#00FF88]/20 bg-gradient-to-br from-[#00FF88]/5 via-transparent to-transparent">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00FF88]/5 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00D1FF]/5 blur-[100px] rounded-full"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full glass-panel border-[#00FF88]/30 flex items-center justify-center relative group">
                  <div className="absolute inset-0 rounded-full bg-[#00FF88]/10 animate-ping opacity-20"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#00FF88]/20 animate-[spin_20s_linear_infinite]"></div>
                  
                  <div className="bg-gradient-to-tr from-[#00FF88] to-[#00D1FF] w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,255,136,0.3)] transition-transform group-hover:scale-105 duration-700">
                    <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-[#020202]" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#020202] border-2 border-[#00FF88] px-6 py-3 rounded-2xl rotate-12 shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
                  <span className="block text-2xl font-black text-[#00FF88] leading-none">7 DIAS</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Garantidos</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5">
                  <ShieldAlert className="w-4 h-4 text-[#00FF88]" />
                  <span className="text-[10px] font-mono font-bold text-[#00FF88] uppercase tracking-[0.3em]">Protocolo de Risco Zero</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                  Sua Satisfação é <br />
                  <span className="text-[#00FF88] italic">Obrigatória</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                  Eu retiro todo o peso das suas costas. Você tem 7 dias para testar todo o sistema. Se você não sentir que os resultados valem 10x o valor investido, devolvemos cada centavo sem perguntas.
                </p>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00FF88]"></div>
                      <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Reembolso 100% Digital</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00FF88]"></div>
                      <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Segurança Bancária SSL</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-10 justify-center">
                <Layers className="w-6 h-6 text-[#00D1FF]" />
                <h2 className="text-3xl font-black tracking-tighter uppercase">Query FAQ / Perguntas Frequentes</h2>
             </div>
             <div className="max-w-3xl mx-auto">
               {[
                 { q: "Acesso Imediato?", a: "Login enviado em milissegundos após confirmação de pagamento via e-mail e WhatsApp." },
                 { q: "Hardware Necessário?", a: "Totalmente baseado em nuvem. Funciona em qualquer navegador moderno, seja desktop ou mobile." },
                 { q: "Suporte Técnico?", a: "Time de especialistas disponível via Discord e E-mail em horário comercial para sanar qualquer dúvida técnica." },
                 { q: "Updates Futuros?", a: "Protocolo vitalício com todas as novas tecnologias e patches inclusos sem custo adicional." }
               ].map((faq, i) => (
                 <FAQAccordion key={i} item={{question: faq.q, answer: faq.a}} />
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#00FF88] to-[#00D1FF] flex items-center justify-center font-black text-[#020202]">V</div>
             <p className="font-mono text-xs uppercase tracking-[0.5em] text-gray-500">System V.2025</p>
          </div>
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Digital Supremacy Protocols. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
             <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse delay-75"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
