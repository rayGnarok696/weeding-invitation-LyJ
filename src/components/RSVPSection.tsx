// components/RSVPSection.tsx - Versión corregida
import React, { useState } from 'react';
import { Users, MessageCircle } from 'lucide-react';

// Definir tipo para formData
interface RSVPFormData {
  name: string;
  guests: string;
  attendance: 'yes' | 'no';
  message: string;
}

const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje de WhatsApp - CORREGIDO: formData.attendance en lugar de formData.attention
    const message = `¡Hola Luli y Juan! Soy ${formData.name}. Confirmo mi asistencia a su boda:
    - Asistencia: ${formData.attendance === 'yes' ? 'Sí asistiré' : 'No podré asistir'}
    - Número de invitados: ${formData.guests}
    ${formData.message ? `- Mensaje: ${formData.message}` : ''}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/524622462457?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Mostrar confirmación
    setSubmitted(true);
    
    // Reiniciar formulario
    setFormData({
      name: '',
      guests: '1',
      attendance: 'yes',
      message: '',
    });
    
    // Ocultar confirmación después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="rsvp" className="py-16 px-4 bg-sage-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Users className="w-10 h-10 text-sage-dark mr-3" />
            <h2 className="font-playfair text-4xl text-sage-dark">Confirmación</h2>
          </div>
          <p className="font-montserrat text-xl text-sage-dark max-w-3xl mx-auto mb-2">
            Confirma tu asistencia antes del 5 de Febrero de 2026
          </p>
          <p className="font-montserrat text-sage-dark">
            Por favor, completa el siguiente formulario o contáctanos por WhatsApp
          </p>
        </div>

        {/* Formulario RSVP */}
        <div className="bg-cream rounded-2xl shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-sage text-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-3xl text-sage-dark mb-4">¡Gracias por confirmar!</h3>
              <p className="font-montserrat text-sage-dark text-lg">
                Hemos recibido tu confirmación. Te esperamos con mucha ilusión en nuestra boda.
              </p>
              <p className="font-montserrat text-sage-dark mt-4">
                Si no se abrió WhatsApp automáticamente, puedes enviar tu mensaje manualmente al: 
                <a href="https://wa.me/524622462457" className="text-sage hover:underline ml-1">55 462 2462457</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Nombre */}
                <div>
                  <label className="block font-montserrat text-sage-dark mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-sage focus:outline-none font-montserrat"
                    placeholder="Tu nombre y apellido"
                  />
                </div>
                
                {/* Número de invitados */}
                <div>
                  <label className="block font-montserrat text-sage-dark mb-2">Número de invitados *</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-sage focus:outline-none font-montserrat"
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                  </select>
                </div>
              </div>

              {/* Asistencia */}
              <div className="mb-8">
                <label className="block font-montserrat text-sage-dark mb-4">¿Asistirás a nuestra boda? *</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                      required
                      className="mr-2 text-sage focus:ring-sage"
                    />
                    <span className="font-montserrat text-sage-dark">¡Sí, estaré allí!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                      required
                      className="mr-2 text-sage focus:ring-sage"
                    />
                    <span className="font-montserrat text-sage-dark">No podré asistir</span>
                  </label>
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <button
                  type="submit"
                  className="px-8 py-4 bg-sage text-cream rounded-lg font-montserrat font-semibold hover:bg-sage-dark transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    const phoneNumber = "524622462457";
                    const message = "¡Hola Luli y Juan! Quiero confirmar mi asistencia a su boda.";
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="px-8 py-4 border-2 border-sage text-sage-dark rounded-lg font-montserrat font-semibold hover:bg-sage/10 transition-colors"
                >
                  Contactar directamente por WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Información de contacto adicional */}
        <div className="mt-6 grid md:grid-cols-3 gap-6">          
          <div className="bg-cream p-6 rounded-xl shadow-lg text-center">
            <h4 className="font-playfair text-xl text-sage-dark mb-3">Fecha límite</h4>
            <p className="font-montserrat text-sage-dark">5 de Febrero, 2026</p>
            <p className="font-montserrat text-sm text-sage-dark mt-2">
              Por favor confirma antes de esta fecha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;