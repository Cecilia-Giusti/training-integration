import React from "react";

/**
 * Logo component.
 * @returns {JSX.Element} - The Logo component.
 */
const Logo = () => {
  return (
    <div className='logo'>
      <img src='./assets/logo.png' alt='Mulih' className='logo-img' />
      <p className='logo-name' data-testId='entreprise-name'>
        Mulih
      </p>
    </div>
  );
};

export default Logo;
