import './App.css';
import Counter from './Counter';
import Hangman from './Hangman';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  // eslint-disable-next-line no-console
  console.log(`Running in '${import.meta.env.MODE}' mode`);
  let page = 'home';
  if (window.location.href.endsWith('counter')) {
    page = 'counter';
  } else if (window.location.href.endsWith('hangman')) {
    page = 'hangman';
  }

  let component = null;
  switch (page) {
    case 'counter':
      component = <Counter />;
      break;
    case 'hangman':
      component = <Hangman />;
      break;
    default:
      component = <Home />;
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
