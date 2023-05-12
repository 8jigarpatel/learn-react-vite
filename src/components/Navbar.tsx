function Navbar() {
  return (
    <nav className="nav">
      <div className="mb-2 sm:mb-0">
        <a href="/home" className="nav-item nav-item-active font-semibold">
          Home
        </a>
      </div>
      <div>
        <a href="/counter" className="nav-item">
          Counter
        </a>
        <a href="/hangman" className="nav-item">
          Hangman
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
