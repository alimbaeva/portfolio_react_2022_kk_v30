import { Route, Routes } from 'react-router-dom';
import { NavBar, Home, About, Block, Contact } from './components';
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
          <Route path='block' element={<Block />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoteFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
