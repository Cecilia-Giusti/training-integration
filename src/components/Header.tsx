import { NavLink } from "react-router-dom";
import ButtonCallToAction from "./ButtonCallToAction";

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
          <li className='header-list-item'>
            <NavLink to={"/"} data-testId='nav-home'>
              Home{" "}
            </NavLink>
          </li>

          <li className='header-list-item'>
            <NavLink to={"/Property"}>Property</NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/Service"} data-testId='nav-service'>
              Service
            </NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>

        <div className='header-coonection'>
          <ButtonCallToAction text='Sign in' color='white' />
          <ButtonCallToAction text='Login' color='green' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
