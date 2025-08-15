import { MessageCircle } from "lucide-react";

const RealitySection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5521951005566&text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20especializada%20para%20o%20meu%20filho.";

  return (
    <section className="section-padding section-gray">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-highlight">UMA DURA REALIDADE:</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-semibold mb-8 text-foreground">
            Os filhos mais desafiadores são, quase sempre, os mais inteligentes e sensíveis.
          </p>

          <div className="text-left space-y-6 text-lg leading-relaxed">
            <p>
              São crianças que <strong className="text-highlight">sentem tudo mais intensamente</strong>, 
              que processam o mundo de forma diferente e que, muitas vezes, acabam sendo rotuladas 
              como "difíceis", "teimosas" ou "desobedientes".
            </p>

            <p>
              Mas a verdade é que essas crianças não estão tentando nos desafiar por maldade. 
              Elas estão tentando nos comunicar algo que <strong className="text-highlight">ainda não conseguem expressar em palavras</strong>.
            </p>

            <p>
              E nós, como pais, nos sentimos perdidos, frustrados e, muitas vezes, culpados. 
              Tentamos de tudo: conversas, castigos, recompensas, gritos... 
              Mas nada parece funcionar de forma duradoura.
            </p>

            <p>
              O que você precisa entender é que <strong className="text-highlight">não é culpa sua</strong>. 
              Você não recebeu um manual de instruções sobre como lidar com as emoções da sua criança. 
              E é exatamente isso que podemos mudar juntas.
            </p>

            <p className="text-xl font-semibold text-highlight">
              Porque quando entendemos a linguagem das emoções da nossa criança, 
              tudo muda. A paz volta para casa. O sorriso volta para o rosto do seu filho. 
              E você recupera a confiança como mãe.
            </p>
          </div>

          <div className="mt-12">
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

export default RealitySection;