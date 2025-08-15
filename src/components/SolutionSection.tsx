import { MessageCircle } from "lucide-react";
import solutionImage from "@/assets/solution-image.jpg";

const SolutionSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5521951005566&text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20especializada%20para%20o%20meu%20filho.";

  return (
    <section className="section-padding section-white">
      <div className="container-width">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-highlight">A SAÍDA:</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-text">
            Ensinar tanto à criança quanto aos pais uma nova linguagem - a linguagem das emoções.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="slide-up">
            <img 
              src={solutionImage} 
              alt="Comunicação emocional entre pais e filhos"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="fade-in">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                As famílias que estão superando essa fase descobriram algo fundamental: <strong className="text-highlight">não adianta tentar 'corrigir' o comportamento da criança sem antes entender o que ela está tentando comunicar</strong>. E não adianta entender, se os pais não têm as ferramentas práticas para responder de forma eficaz.
              </p>

              <p>
                <strong className="text-highlight">A única abordagem que realmente funciona é aquela que trabalha simultaneamente com a criança E com a família.</strong>
              </p>

              <p>
                Isso funciona porque criança não existe isolada – ela é parte de um sistema familiar. Quando os pais aprendem a 'traduzir' os comportamentos e a criança aprende formas mais eficazes de se expressar, toda a dinâmica muda.
              </p>

              <p>
                Lembra das crises no supermercado? <strong className="text-highlight">Elas param quando a criança tem outras ferramentas para expressar frustração</strong>. Lembra da sensação de impotência? Ela desaparece quando você sabe exatamente como agir em cada situação.
              </p>

              <p className="text-xl font-semibold">
                Quem realmente consegue resultados duradouros faz três coisas simultaneamente:
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Como isso funciona na prática:
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold mb-3">HABILIDADES EMOCIONAIS</h4>
              <p className="text-gray-text">
                Trabalha as habilidades emocionais da criança
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold mb-3">FERRAMENTAS PRÁTICAS</h4>
              <p className="text-gray-text">
                Capacita os pais com ferramentas práticas
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold mb-3">CONEXÃO FAMILIAR</h4>
              <p className="text-gray-text">
                Reconstrói a conexão familiar que foi abalada pelas crises constantes
              </p>
            </div>
          </div>

          <div className="text-center">
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
    </section>
  );
};

export default SolutionSection;