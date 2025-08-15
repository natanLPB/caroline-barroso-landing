import { MapPin, MessageCircle, Instagram, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Gostaria de ajuda especializada para o meu filho.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Mensagem:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5521951005566&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding section-white">
      <div className="container-width">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-highlight">CONTATO</span>
          </h2>
          <p className="text-xl text-gray-text">
            Entre em contato e tire suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Localização</h4>
                  <p className="text-gray-text">
                    Rio de Janeiro, RJ<br />
                    Atendimento presencial e online
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-whatsapp text-whatsapp-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <a 
                    href="https://api.whatsapp.com/send?phone=5521951005566&text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20especializada%20para%20o%20meu%20filho."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whatsapp hover:text-whatsapp-hover transition-colors"
                  >
                    (21) 95100-5566
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Instagram</h4>
                  <a 
                    href="https://instagram.com/carolinebarroso.psi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    @carolinebarroso.psi
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <h4 className="font-semibold mb-2 text-primary">Horário de Atendimento</h4>
              <p className="text-gray-text">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <div className="card-elevated">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(21) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Conte um pouco sobre a situação do seu filho e como posso ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-whatsapp justify-center"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;