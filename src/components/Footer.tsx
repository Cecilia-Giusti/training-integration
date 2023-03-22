import Logo from "./Logo";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import SocialNetwork from "./SocialNetwork";

/**
Footer Component.
@function
@returns {JSX.Element}
*/
const Footer = (): JSX.Element => {
  return (
    <footer data-testId='footer'>
      <div className='footer'>
        <div className='footer-presentation'>
          <Logo />
          <p className='footer-presentation-text'>
            We have built our reputation as true local area experts.
          </p>
          <Newsletter />
        </div>

        <div className='footer-service'>
          <ul className='footer-list' data-testId='services-list'>
            <li className='footer-item footer-item-title'>
              <Link to={"/"}>Services</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>About us</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>Career</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>Teams & Conditions</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>Privacy & Policy</Link>
            </li>
          </ul>
        </div>

        <div className='footer-community'>
          <ul className='footer-list' data-testId='community-list'>
            <li className='footer-item footer-item-title'>
              <Link to={"/"}>Community</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>Find agents</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>Lifestyle</Link>
            </li>
            <li className='footer-item'>
              <Link to={"/"}>Legal notic</Link>
            </li>
          </ul>
        </div>
        <div className='footer-socialNetwork' data-testId='social-network-list'>
          <p className='footer-item footer-item-title'> Follow us on</p>{" "}
          <SocialNetwork />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
