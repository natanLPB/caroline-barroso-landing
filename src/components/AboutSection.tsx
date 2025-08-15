import { MessageCircle } from "lucide-react";
import carolinePhoto from "@/assets/caroline-photo.jpg";

const AboutSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5521951005566&text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20especializada%20para%20o%20meu%20filho.";

  return (
    <section className="section-padding section-gray">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-highlight">PRAZER, CAROLINE!</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="slide-up text-center lg:text-left">
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-6 lg:mb-0">
              <img 
                src={carolinePhoto} 
                alt="Caroline Barroso - Psicóloga Infantojuvenil"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Quem sou eu
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Sou <strong className="text-highlight">Caroline Barroso</strong>, psicóloga 
                especializada em crianças e adolescentes, com mais de 10 anos de experiência 
                ajudando famílias a transformarem suas dinâmicas e recuperarem a harmonia em casa.
              </p>

              <p>
                Durante minha trajetória profissional, já acompanhei centenas de famílias e 
                observei um padrão: <strong className="text-highlight">os pais não precisam de 
                mais técnicas de disciplina</strong>. Eles precisam aprender a linguagem emocional 
                de seus filhos.
              </p>

              <p>
                Minha missão é ensinar às famílias que <strong className="text-highlight">
                comportamento é comunicação</strong>. Cada birra, cada "desobediência", cada 
                crise é uma tentativa da criança de nos dizer algo importante sobre seu mundo interno.
              </p>

              <p>
                Acredito profundamente que toda criança quer colaborar e se conectar com seus pais. 
                Quando oferecemos as ferramentas certas e criamos um ambiente emocionalmente seguro, 
                a transformação acontece naturalmente.
              </p>

              <p className="font-semibold text-highlight">
                Vamos juntas descobrir a linguagem única do seu filho e construir uma 
                relação baseada na compreensão, no respeito mútuo e no amor incondicional.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                QUERO AJUDA ESPECIALIZADA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;