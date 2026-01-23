//import React from 'react';
//import { Heart, Clock, MapPin, Calendar, Users, MessageCircle } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WeddingWebsite from '../src/pages/WeddingWebsite';
import WelcomePage from '../src/pages/WelcomePage'
import type { FC } from 'react'

function App() {
   <Router>
      <Routes>
        <Route path="/home" element={<WeddingWebsite />} />
        <Route path="/landing" element={<WelcomePage/>}/>      

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  return <WeddingWebsite />;
}
const NotFound: FC = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h2>Página no encontrada</h2>
    <p>Pero ahorita la encontramos 😉</p>
  </div>
);

export default App;