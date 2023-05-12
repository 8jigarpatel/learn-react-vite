import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="nav-item nav-item-active font-semibold">
          Home
        </Link>
      </div>
      <div>
        <Link to="/counter" className="nav-item">
          Counter
        </Link>
        <Link to="/hangman" className="nav-item">
          Hangman
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
