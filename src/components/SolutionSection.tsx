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
                Meu trabalho como psicóloga infantojuvenil não é apenas "consertar" comportamentos. 
                É <strong className="text-highlight">ensinar uma nova forma de comunicação</strong> 
                que transforma toda a dinâmica familiar.
              </p>

              <p>
                Trabalho com a criança para que ela aprenda a identificar, nomear e expressar 
                suas emoções de forma saudável. E trabalho com os pais para que compreendam 
                os sinais emocionais dos filhos e saibam como responder de forma acolhedora e eficaz.
              </p>

              <p>
                <strong className="text-highlight">O resultado?</strong> Uma família que se entende, 
                se conecta e cresce junta. Crianças mais seguras, pais mais confiantes e um lar cheio de paz.
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
              <h4 className="text-lg font-semibold mb-3">COMPREENSÃO</h4>
              <p className="text-gray-text">
                Identificamos juntos os gatilhos emocionais da criança e os padrões familiares 
                que podem estar contribuindo para os conflitos.
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold mb-3">FERRAMENTAS</h4>
              <p className="text-gray-text">
                Ensino estratégias práticas e eficazes para lidar com crises, estabelecer limites 
                amorosos e promover a autorregulação emocional.
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold mb-3">TRANSFORMAÇÃO</h4>
              <p className="text-gray-text">
                Acompanhamos a evolução e ajustamos as estratégias conforme necessário, 
                até que a nova dinâmica se torne natural na família.
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