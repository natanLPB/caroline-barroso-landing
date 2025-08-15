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
              Eles sentem mais intensamente, processam diferente, reagem de forma mais dramática a mudanças que outras crianças nem percebem. E isso deixa qualquer mãe ou pai no limite – porque ninguém nos ensinou como lidar com uma criança que sente o mundo <strong className="text-highlight">'em alta definição'</strong>.
            </p>

            <p>
              A frustração não vem só do comportamento em si, mas da sensação de estar sempre <strong className="text-highlight">'apagando incêndio'</strong> sem entender por que eles começam. Mas o que a maioria dos pais não percebe é que essa intensidade emocional não é um defeito…
            </p>

            <p>
              <strong className="text-highlight">É um sistema nervoso jovem e superdesenvolvido tentando navegar um mundo que ainda não faz sentido para ele.</strong>
            </p>

            <p>
              E quando essa criança explode em birras, desobedece ou se isola, ela não está sendo 'má' – está pedindo ajuda da única forma que conhece.
            </p>

            <p>
              Cada 'não' gritado, cada porta batida, cada 'você não me entende' é uma tentativa desesperada de comunicar: <strong className="text-highlight">'Eu preciso que alguém me ensine como lidar com isso que sinto'</strong>.
            </p>

            <p>
              Grande parte das queixas escolares envolvem questões comportamentais, não acadêmicas. Ou seja: a maioria das crianças sabe a matéria, mas não consegue regular as emoções para demonstrar isso.
            </p>

            <p>
              O que isso realmente significa é que <strong className="text-highlight">você não está criando errado. Seu filho não é 'problemático'</strong>. Você está lidando com uma criança que precisa aprender habilidades emocionais que ninguém ensina na escola.
            </p>

            <p>
              A maioria das pessoas ainda acredita que 'criança bem educada não dá trabalho', mas a realidade é que crianças sensíveis e inteligentes dão MAIS trabalho – porque sentem e questionam tudo mais profundamente.
            </p>

            <p>
              Enquanto você se culpa pelos comportamentos do seu filho, ele continua sofrendo por não conseguir expressar o que sente. Cada dia que passa sem as ferramentas certas, é mais frustração acumulada para ambos.
            </p>

            <p>
              E a parte mais dolorosa? Ver outras famílias que parecem ter 'filhos fáceis' e se perguntar por que com você é diferente. <strong className="text-highlight">Não é porque você está fazendo algo errado – é porque seu filho precisa de uma abordagem diferente.</strong>
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