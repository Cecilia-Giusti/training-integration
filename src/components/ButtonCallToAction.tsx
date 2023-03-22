interface ButtonCallToActionInt {
  text: string;
  color: string;
  functionOnclick?: any;
}

/**
 * ButtonCallToAction component.
 * @param {Object} props - The component props.
 * @param {string} props.text - The button text.
 * @param {string} props.color - The button color.
 * @param {Function} [props.functionOnclick] - The onClick function for the button.
 * @returns {JSX.Element} - The ButtonCallToAction component.
 */
const ButtonCallToAction = ({
  text,
  color,
  functionOnclick,
}: ButtonCallToActionInt): JSX.Element => {
  return (
    <button
      onClick={(e) => functionOnclick(e)}
      className={
        color === "white"
          ? "btn-callToAction btn-callToAction-white"
          : "btn-callToAction btn-callToAction-green"
      }>
      {text}
    </button>
  );
};

export default ButtonCallToAction;
