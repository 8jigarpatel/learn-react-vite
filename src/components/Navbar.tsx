import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <div className="mb-2 sm:mb-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'nav-item font-semibold nav-item-active'
              : 'nav-item font-semibold'
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/counter"
          className={({ isActive }) =>
            isActive ? 'nav-item nav-item-active' : 'nav-item'
          }
        >
          Counter
        </NavLink>
        <NavLink
          to="/hangman"
          className={({ isActive }) =>
            isActive ? 'nav-item nav-item-active' : 'nav-item'
          }
        >
          Hangman
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
