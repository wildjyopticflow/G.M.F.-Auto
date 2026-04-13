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
  Facebook
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Zap className="w-6 h-6" />, title: "Diagnostique électrique", desc: "Analyse complète des systèmes électroniques et électriques de votre véhicule." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Freins & Suspension", desc: "Remplacement de plaquettes, disques et entretien de la suspension pour votre sécurité." },
    { icon: <Settings className="w-6 h-6" />, title: "Moteur & Transmission", desc: "Réparation experte, changement d'huile et entretien préventif du groupe motopropulseur." },
    { icon: <Gauge className="w-6 h-6" />, title: "Pneus & Parallélisme", desc: "Équilibrage, permutation et alignement précis des roues." },
    { icon: <Wrench className="w-6 h-6" />, title: "Mécanique à domicile", desc: "Service de dépannage et réparations mineures directement chez vous." },
    { icon: <Car className="w-6 h-6" />, title: "Vente & Location", desc: "Achat, vente et location de véhicules fiables et inspectés." },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-lime-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center border-2 border-zinc-950 shadow-[0_0_15px_rgba(132,204,22,0.5)]">
              <Wrench className="w-6 h-6 text-zinc-950" />
            </div>
            <span className="font-display font-bold text-2xl text-white tracking-tight">GMF AUTO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-lime-400 transition-colors uppercase tracking-wider">Services</a>
            <a href="#propos" className="text-sm font-medium hover:text-lime-400 transition-colors uppercase tracking-wider">À Propos</a>
            <a href="#contact" className="text-sm font-medium hover:text-lime-400 transition-colors uppercase tracking-wider">Contact</a>
            <a href="#contact" className="bg-lime-500 hover:bg-lime-600 text-zinc-950 px-6 py-2.5 rounded-sm font-bold transition-colors transform -skew-x-12">
              <span className="block transform skew-x-12">Rendez-vous</span>
            </a>
          </div>

          <button className="md:hidden text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-display">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-lime-400">Services</a>
            <a href="#propos" onClick={() => setMobileMenuOpen(false)} className="hover:text-lime-400">À Propos</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-lime-400">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2070&auto=format&fit=crop" 
            alt="Atelier mécanique" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 border border-lime-500/20 text-lime-400 rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              Garage Mécanique • Pointe-aux-Trembles
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 uppercase tracking-tight">
              L'expertise <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
                automobile
              </span><br/>
              sans compromis.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
              De l'entretien de routine à la restauration complète, nous traitons chaque véhicule avec le respect qu'il mérite. Diagnostics honnêtes, réparations durables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-lime-500 hover:bg-lime-600 text-zinc-950 px-8 py-4 text-center font-bold transition-colors transform -skew-x-12 flex items-center justify-center group">
                <span className="block transform skew-x-12 flex items-center gap-2">
                  Prendre Rendez-vous
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#services" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-8 py-4 text-center font-medium transition-colors transform -skew-x-12">
                <span className="block transform skew-x-12">Nos Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-sm text-lime-400 font-bold uppercase tracking-widest mb-2">Centre de Réparation</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Nos Services Complets</h3>
            </div>
            <p className="text-zinc-400 max-w-md">
              Des solutions professionnelles pour chaque véhicule. De l'entretien quotidien aux réparations complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900 hover:border-lime-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform rounded-full">
                  {service.icon}
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="propos" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-sm text-lime-400 font-bold uppercase tracking-widest mb-2">Notre Histoire</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">De l'essence dans nos veines.</h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Situé au cœur de Pointe-aux-Trembles, GMF Auto est né d'une passion inébranlable pour la mécanique et le service client. Nous avons transformé cette passion en une mission : aider les autres à entretenir leurs véhicules en toute confiance.
                </p>
                <p>
                  Nous avons rapidement compris que l'industrie avait besoin de plus de transparence. En combinant un emplacement de choix sur le boulevard Industriel avec une expertise technique de pointe, nous avons créé un garage où l'honnêteté prime.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-zinc-800">
                <div>
                  <div className="font-display text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-lime-400 uppercase tracking-wider font-medium">Passion Pure</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-white mb-1">5.0</div>
                  <div className="text-sm text-lime-400 uppercase tracking-wider font-medium">Note Google</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-lime-500 transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop" 
                alt="Mécanicien au travail" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center border-2 border-zinc-950 shadow-[0_0_10px_rgba(132,204,22,0.5)]">
                  <Wrench className="w-5 h-5 text-zinc-950" />
                </div>
                <span className="font-display font-bold text-xl text-white tracking-tight">GMF AUTO</span>
              </div>
              <p className="text-zinc-400 mb-8 max-w-md">
                Réseau des professionnels de l'automobile et de la mécanique du Québec. Votre garage de confiance à Pointe-aux-Trembles.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/amazighvoyages/?locale=fr_CA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:bg-lime-500 transition-colors cursor-pointer rounded-full">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <span>12124 Bd Industriel,<br/>Pointe-aux-Trembles,<br/>QC H1B 5R7</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-lime-400 shrink-0" />
                  <span className="font-display font-bold text-white text-lg">438-699-0068</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-white font-bold uppercase tracking-wider mb-6">Heures d'ouverture</h4>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex justify-between border-b border-zinc-800/50 pb-2">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/50 pb-2">
                  <span>Samedi</span>
                  <span className="text-white">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Dimanche</span>
                  <span className="text-lime-400">Fermé</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} GMF Auto. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Termes de service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
