import { Route, Routes } from 'react-router-dom';

import './App.css';
import Counter from './Counter';
import Hangman from './Hangman';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  // eslint-disable-next-line no-console
  console.log(`Running in '${import.meta.env.MODE}' mode`);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </>
  );
}

export default App;
