// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const weddingDate = new Date('2026-02-14T17:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-12 md:py-16 px-4 bg-beige/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Clock className="w-8 h-8 md:w-10 md:h-10 text-red-700 mr-3" />
          <h2 className="font-playfair text-3xl md:text-4xl text-red-800">Cuenta Regresiva</h2>
        </div>
        
        <p className="font-montserrat text-lg text-red-700 mb-8 max-w-2xl mx-auto px-4">
          Faltan pocos días para nuestra boda. ¡Esperamos verte allí!
        </p>
        
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-beige rounded-lg p-4 shadow-lg border border-red-100 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px]">
              <div className="font-playfair text-3xl md:text-4xl text-red-800 font-bold leading-tight">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="font-montserrat text-xs md:text-sm text-red-700 uppercase tracking-wider mt-2 px-2 text-center leading-tight">
                {unit === 'days' ? 'Días' : 
                 unit === 'hours' ? 'Horas' : 
                 unit === 'minutes' ? 'Minutos' : 
                 'Segundos'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;