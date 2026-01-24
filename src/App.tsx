import { Routes, Route } from 'react-router-dom'
import WeddingWebsite from '../src/pages/WeddingWebsite';
import WelcomePage from '../src/pages/WelcomePage'
import type { FC } from 'react'

const App: FC = () => {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/wedding" element={<WeddingWebsite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
};
const NotFound: FC = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h2>Página no encontrada</h2>
    <p>Pero ahorita la encontramos 😉</p>
  </div>
);

export default App;