import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Portfolio from './components/pages/portfolio/Portfolio';
import Contact from './components/pages/contact/Contact';
import NoteFound from './components/pages/Notefound/NoteFound';


import './app.scss';


function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoteFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
