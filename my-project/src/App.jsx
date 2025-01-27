import { useState } from 'react';   // Importación de hooks de React
import './App.css';                  // Importación del archivo CSS
import Hero from './components/Hero.jsx'; // Componentes de tu app
import TravelOptions from './components/TravelOptions.jsx';
import About from './components/About';
import CustomExperiences from './components/CustomExperiences.jsx';
import Experiences from './components/Experiences.jsx';
import Blogs from './components/Blogs.jsx';
import DesignTrip from './components/DesignTrip.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <TravelOptions />
      <About />
      <CustomExperiences />
      <Experiences />
      <Blogs />
      <DesignTrip />        
      <Footer />
    </div>
  );
}

 // Asegúrate de exportar el componente


/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

export default App;
