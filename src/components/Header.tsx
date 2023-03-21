import { NavLink } from "react-router-dom";

/**
Header Component.
@function
@returns {JSX.Element}
*/
const Header = () => {
  return (
    <header className='header' data-testId='header'>
      <nav className='header-nav'>
        <div className='header-logo'>
          <img
            src='./assets/logo.png'
            alt='Mulih'
            className='header-logo-img'
          />
          <p className='header-logo-name'>Mulih</p>
        </div>

        <ul className='header-list'>
          <NavLink to={"/"}>Home </NavLink>
          <li className='header-list-item'>
            <NavLink to={"/"}>Property</NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/"}>Service</NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/"}>Contact</NavLink>
          </li>
        </ul>

        <div className='header-coonection'>
          <button className='header-signIn'>Sign in </button>
          <button className='header-login'>Login </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
