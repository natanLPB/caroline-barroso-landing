import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TransformationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5521951005566&text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20especializada%20para%20o%20meu%20filho.";

  const testimonials = [
    {
      name: "Maria Silva",
      situation: "Antes: Crises diárias, birras constantes",
      transformation: "Hoje meu filho consegue expressar suas emoções sem gritar. As crises diminuíram 90% e nossa casa voltou a ter paz.",
      child: "Lucas, 6 anos"
    },
    {
      name: "Ana Costa",
      situation: "Antes: 'Ele não me obedece em nada'",
      transformation: "Aprendi a me comunicar de forma que ele entende. Agora temos uma rotina harmoniosa e ele colabora voluntariamente.",
      child: "Pedro, 8 anos"
    },
    {
      name: "Juliana Santos",
      situation: "Antes: Exaustão total como mãe",
      transformation: "Recuperei minha energia e confiança. Entendi que não era minha culpa e aprendi as ferramentas certas para ajudar minha filha.",
      child: "Sofia, 5 anos"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding section-white">
      <div className="container-width">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-highlight">CRIANÇAS E FAMÍLIAS</span>
          </h2>
          <p className="text-xl text-gray-text">Com suas rotinas transformadas</p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="card-elevated mx-4">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 text-highlight">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-text mb-4">{testimonial.child}</p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-light p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-text mb-2">SITUAÇÃO ANTERIOR:</p>
                          <p className="text-foreground">{testimonial.situation}</p>
                        </div>
                        
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <p className="text-sm font-medium text-primary mb-2">TRANSFORMAÇÃO:</p>
                          <p className="text-foreground">{testimonial.transformation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-medium'
                }`}
              />
            ))}
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
            QUERO ESSA TRANSFORMAÇÃO
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;