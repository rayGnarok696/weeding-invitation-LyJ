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
    <section id="countdown" className="py-16 px-4 bg-sage-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Clock className="w-10 h-10 text-sage-dark mr-3" />
          <h2 className="font-playfair text-4xl text-sage-dark">Cuenta Regresiva</h2>
        </div>
        
        <p className="font-montserrat text-xl text-sage-dark mb-12">
          Faltan pocos días para nuestra boda. ¡Esperamos verte allí!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-cream rounded-lg p-6 shadow-lg">
              <div className="font-playfair text-5xl text-sage-dark mb-2">{value}</div>
              <div className="font-montserrat text-lg text-sage-dark capitalize">
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