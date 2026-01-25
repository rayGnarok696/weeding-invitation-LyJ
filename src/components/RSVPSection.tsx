// components/RSVPSection.tsx - Versión corregida
import React, { useState } from 'react';
import { Users, MessageCircle } from 'lucide-react';

// Definir tipo para formData
interface RSVPFormData {
  name: string;
  attendance: 'yes' | 'no';
  message: string;
}

const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
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
    ${formData.message ? `- Mensaje: ${formData.message}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/524621485872?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Mostrar confirmación
    setSubmitted(true);

    // Reiniciar formulario
    setFormData({
      name: '',
      attendance: 'yes',
      message: '',
    });

    // Ocultar confirmación después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="rsvp" className="py-16 px-4 bg-beige/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Users className="w-10 h-10 text-red-700 mr-3" />
            <h2 className="font-playfair text-4xl text-red-800">Confirmación</h2>
          </div>
          <p className="font-montserrat text-xl text-red-700 max-w-3xl mx-auto mb-2">
            Confirma tu asistencia antes del 7 de Febrero de 2026
          </p>
          <p className="font-montserrat text-red-700">
            Por favor, completa el siguiente formulario o contáctanos por WhatsApp
          </p>
        </div>

        {/* Formulario RSVP */}
        <div className="bg-beige rounded-2xl shadow-xl p-8 border border-red-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-red-600 text-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-3xl text-red-800 mb-4">¡Gracias por confirmar!</h3>
              <p className="font-montserrat text-red-700 text-lg">
                Hemos recibido tu confirmación. Te esperamos con mucha ilusión en nuestra boda.
              </p>
              <p className="font-montserrat text-red-700 mt-4">
                Si no se abrió WhatsApp automáticamente, puedes enviar tu mensaje manualmente al:
                <a href="https://wa.me/524621485872" className="text-red-600 hover:underline ml-1">554621485872</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Nombre */}
                <div>
                  <label className="block font-montserrat text-red-800 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-red-300 focus:border-red-500 focus:outline-none font-montserrat"
                    placeholder="Tu nombre y apellido"
                  />
                </div>                
              </div>

              {/* Asistencia */}
              <div className="mb-8">
                <label className="block font-montserrat text-red-800 mb-4">¿Asistirás a nuestra boda? *</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                      required
                      className="mr-2 text-red-600 focus:ring-red-500"
                    />
                    <span className="font-montserrat text-red-700">¡Sí, estaré allí!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                      required
                      className="mr-2 text-red-600 focus:ring-red-500"
                    />
                    <span className="font-montserrat text-red-700">No podré asistir</span>
                  </label>
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <button
                  type="submit"
                  className="px-8 py-4 bg-red-600 text-beige rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const phoneNumber = "524621485872";
                    const message = "¡Hola Luli y Juan! Quiero confirmar mi asistencia a su boda.";
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="px-8 py-4 border-2 border-red-600 text-red-700 rounded-lg font-montserrat font-semibold hover:bg-red-50 transition-colors"
                >
                  Contactar directamente por WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;