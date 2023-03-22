import React, { useRef } from "react";

const Newsletter = () => {
  const mailRef = useRef<HTMLInputElement>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subscribeToNewsletter = () => {
    if (
      mailRef.current !== null &&
      mailRef.current.value !== "" &&
      emailRegex.test(mailRef.current.value)
    ) {
      console.log(mailRef.current.value);
    } else {
      console.log("Rentre ton email s'il te plait");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      subscribeToNewsletter();
    }
  };

  return (
    <div className='newsletter'>
      {" "}
      <input
        ref={mailRef}
        className='newsletter-email'
        type='email'
        placeholder='Input your email'
        onKeyDown={handleKeyDown}
      />{" "}
      <input
        className='newsletter-button'
        type='submit'
        value='Send'
        onClick={subscribeToNewsletter}
      />
    </div>
  );
};

export default Newsletter;
