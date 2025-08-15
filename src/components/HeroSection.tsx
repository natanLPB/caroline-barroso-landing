import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5521951005566&text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20especializada%20para%20o%20meu%20filho.";

  return (
    <section className="section-padding section-gradient overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Chega de Crises e <span className="text-highlight">Exaustão</span>: 
              Recupere a Paz em Casa e o <span className="text-highlight">Sorriso do seu Filho</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-text mb-8 leading-relaxed">
              Porque por trás de cada "meu filho não para quieto", "ele não me obedece" ou 
              "não sei mais o que fazer" existe uma criança tentando comunicar algo que ainda 
              não consegue expressar - e uma mãe que precisa das ferramentas certas para 
              entender essa linguagem.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle className="w-6 h-6" />
              VEJA COMO ISSO MUDA TUDO
            </a>
          </div>
          
          <div className="order-1 lg:order-2 slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mãe e filho em harmonia"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-peach/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;