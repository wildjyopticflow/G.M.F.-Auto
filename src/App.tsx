import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Car, 
  Settings, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Menu, 
  X,
  Zap,
  ShieldCheck,
  Gauge,
  Facebook,
  Mail,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Zap className="w-8 h-8" />, title: "Diagnostique électrique", desc: "Analyse complète des systèmes électroniques et électriques de votre véhicule. Scanners de dernière génération pour cibler les anomalies invisibles.", bentoClass: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Freins & Suspension", desc: "Remplacement de disques et entretien suspension pour sécurité.", bentoClass: "md:col-span-2 bg-zinc-900 p-8" },
    { icon: <Settings className="w-6 h-6" />, title: "Moteur & Transmission", desc: "Entretien préventif du groupe motopropulseur.", bentoClass: "md:col-span-2 bg-zinc-900 p-8" },
    { icon: <Wrench className="w-6 h-6" />, title: "Mécanique à domicile", desc: "Dépannage direct chez vous.", bentoClass: "md:col-span-1 bg-lime-500 text-zinc-950 p-8" },
    { icon: <Gauge className="w-6 h-6" />, title: "Pneus & Alignement", desc: "Rotation et équilibrage parfait.", bentoClass: "md:col-span-2 bg-zinc-900 p-8" },
    { icon: <Car className="w-6 h-6" />, title: "Vente & Location", desc: "Véhicules inspectés et garantis.", bentoClass: "md:col-span-1 bg-zinc-900 p-8" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-lime-500/30 overflow-x-hidden">
      
      {/* Top Navigation */}
      <nav className={`w-full z-50 transition-all duration-500 ${isScrolled ? 'fixed top-0 bg-zinc-950/95 backdrop-blur-xl py-4 shadow-2xl' : 'absolute top-0 bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime-500 rounded flex items-center justify-center">
              <Wrench className="w-6 h-6 text-zinc-950 drop-shadow-sm" />
            </div>
            <span className="font-display font-black text-xl text-white tracking-widest uppercase">GMF AUTO</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#home" className="text-sm font-bold text-white hover:text-lime-500 transition-colors uppercase tracking-widest text-[11px]">Home</a>
            <a href="#services" className="text-sm font-bold text-white hover:text-lime-500 transition-colors uppercase tracking-widest text-[11px]">Services</a>
            <a href="#propos" className="text-sm font-bold text-white hover:text-lime-500 transition-colors uppercase tracking-widest text-[11px]">About</a>
            <a href="#contact" className="text-sm font-bold text-white hover:text-lime-500 transition-colors uppercase tracking-widest text-[11px]">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="bg-lime-500 hover:bg-lime-400 text-zinc-950 px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all duration-300 text-[11px]">
              Contact
            </a>
            <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-lime-400 transition-all duration-300">
              <Wrench className="w-4 h-4 text-zinc-950" />
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-md pt-32 px-6 md:hidden text-center">
          <div className="flex flex-col gap-8 text-2xl font-display font-black uppercase tracking-widest">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-lime-500 transition-colors text-white">Services</a>
            <a href="#propos" onClick={() => setMobileMenuOpen(false)} className="hover:text-lime-500 transition-colors text-white">À Propos</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-lime-500 transition-colors text-white">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2070&auto=format&fit=crop" 
            alt="Atelier de réparation" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-20 w-full flex flex-col items-center text-center mt-6">
          
          {/* Centered Contact Info Row */}
          <div className="hidden lg:flex items-center justify-center gap-10 text-[10px] font-sans text-white/90 font-bold tracking-[0.15em] uppercase mb-16">
            <div className="flex items-center gap-2.5"><MapPin className="w-3.5 h-3.5 text-lime-500"/> 12124 Bd Industriel, QC</div>
            <div className="flex items-center gap-2.5"><Phone className="w-3.5 h-3.5 text-lime-500"/> +1 438-699-0068</div>
            <div className="flex items-center gap-2.5"><Mail className="w-3.5 h-3.5 text-lime-500"/> info@gmfauto.ca</div>
            <div className="flex items-center gap-2.5"><Clock className="w-3.5 h-3.5 text-lime-500"/> Lun-Sam: 09:00 - 18:00</div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Caption */}
            <div className="text-lime-500 font-black tracking-[0.2em] uppercase text-xs mb-5">
              MÉCANIQUE DEPUIS 2020
            </div>
            
            {/* Main Heading */}
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight text-white leading-[1.1] mb-12 max-w-4xl capitalize drop-shadow-lg">
              Nous avons <span className="text-lime-500">maîtrisé</span> l'art de<br/>la mécanique
            </h1>
            
            {/* Side-by-side CTA (Pill shaped) */}
            <div className="flex gap-4 mb-20">
              <a href="#services" className="bg-lime-500 text-zinc-950 px-10 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-lime-400 transition-all duration-300">
                Explorer Services
              </a>
              <a href="#contact" className="border border-white text-white px-10 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-all duration-300">
                Prendre Rendez-vous
              </a>
            </div>
          </motion.div>
          
          {/* Bottom Hero Service Links */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="w-full max-w-5xl border-t border-white/20 pt-8 mt-4 hidden lg:flex justify-between items-center text-[10px] font-black uppercase tracking-[0.15em] text-white/50"
          >
            <a href="#services" className="hover:text-lime-500 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] transition-all">Diag Électrique</a>
            <a href="#services" className="hover:text-lime-500 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] transition-all">Freins & Susp</a>
            <a href="#services" className="hover:text-lime-500 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] transition-all">Moteur & Trans</a>
            <a href="#services" className="hover:text-lime-500 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] transition-all">Pneus & Align</a>
            <a href="#services" className="hover:text-lime-500 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] transition-all">Vente & Loc</a>
            <a href="#services" className="hover:text-lime-500 hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] transition-all">Méc. Domicile</a>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section id="services" className="py-24 md:py-32 bg-zinc-950 relative border-t-8 border-lime-500">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <div className="flex items-center gap-3 text-lime-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                <span className="w-6 h-px bg-lime-500"></span>
                Services
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Precision & Performance</h2>
            </div>
            <p className="text-zinc-400 max-w-sm text-sm leading-relaxed border-l border-white/10 pl-5">
              Des solutions professionnelles pour chaque véhicule. De l'entretien quotidien aux réparations complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`glass-card group overflow-hidden relative ${service.bentoClass}`}
              >
                {/* Accent glow on hover */}
                {index === 3 ? null : (
                   <div className="absolute -inset-1 bg-gradient-to-br from-lime-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"/>
                )}
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className={`w-14 h-14 ${index === 3 ? 'bg-zinc-950 text-lime-500' : 'bg-lime-500 text-zinc-950'} flex items-center justify-center transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className={`font-display text-xl font-bold uppercase tracking-wide mb-2 ${index === 3 ? 'text-zinc-950' : 'text-white'}`}>{service.title}</h4>
                    <p className={`text-sm leading-relaxed max-w-sm ${index === 3 ? 'text-zinc-800' : 'text-zinc-400'}`}>{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split About Section */}
      <section id="propos" className="py-24 md:py-32 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-lime-500/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-lime-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                <span className="w-6 h-px bg-lime-500"></span>
                Notre Histoire
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">De l'essence<br/>dans nos veines.</h3>
              
              <div className="space-y-6 text-zinc-400 text-base leading-relaxed pl-6 border-l-2 border-white/10">
                <p>
                  Situé au cœur de Pointe-aux-Trembles, GMF Auto est né d'une passion inébranlable pour la mécanique et le service client. Nous avons transformé cette passion en une mission : aider les autres à entretenir leurs véhicules en toute confiance.
                </p>
                <p>
                  En combinant un emplacement de choix sur le boulevard Industriel avec une expertise technique de pointe, nous avons créé un garage où l'honnêteté et la précision priment avant tout.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-10 mt-12 pt-12 border-t border-white/5">
                <div>
                  <div className="font-display text-5xl font-black text-white mb-2 tracking-tighter">100<span className="text-lime-500">%</span></div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Passion Pure</div>
                </div>
                <div>
                  <div className="font-display text-5xl font-black text-white mb-2 tracking-tighter">5.0<span className="text-lime-500">★</span></div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Note Google</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto group"
            >
              {/* Premium offset border */}
              <div className="absolute inset-0 border-2 border-lime-500 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop" 
                alt="Mécanicien au travail" 
                className="relative z-10 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 z-20 bg-zinc-950 p-6 border border-white/10 hidden md:block">
                <Wrench className="w-10 h-10 text-lime-500 mb-2" />
                <div className="font-display font-black text-xl uppercase text-white tracking-widest">Maîtrise<br/>Totale</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Luxury Footer */}
      <footer id="contact" className="bg-zinc-950 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-lime-500 rounded flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
                  <Wrench className="w-6 h-6 text-zinc-950" />
                </div>
                <span className="font-display font-black text-2xl text-white tracking-widest uppercase">GMF AUTO</span>
              </div>
              <p className="text-zinc-400 mb-8 max-w-md text-sm leading-relaxed border-l-2 border-lime-500 pl-4">
                Réseau des professionnels de l'automobile et de la mécanique du Québec. L'expertise sans compromis à Pointe-aux-Trembles.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/amazighvoyages/?locale=fr_CA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:bg-lime-500 transition-all cursor-pointer rounded border border-white/5">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-white font-black uppercase tracking-widest mb-8 text-lg">Contact</h4>
              <ul className="space-y-6 text-zinc-400 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-lime-500" />
                  </div>
                  <span className="mt-1">12124 Bd Industriel,<br/>Pointe-aux-Trembles,<br/>QC H1B 5R7</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-lime-500 transition-colors">
                    <Phone className="w-4 h-4 text-lime-500 group-hover:text-zinc-950 transition-colors" />
                  </div>
                  <span className="font-display font-black text-white text-xl tracking-wider">438-699-0068</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-white font-black uppercase tracking-widest mb-8 text-lg">Horaires</h4>
              <ul className="space-y-4 text-zinc-400 text-sm font-medium">
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>Samedi</span>
                  <span className="text-white">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between pb-3">
                  <span>Dimanche</span>
                  <span className="text-lime-500">Fermé</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-zinc-500 font-bold uppercase">
            <p>© {new Date().getFullYear()} GMF AUTO. Tous droits réservés.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Termes</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
