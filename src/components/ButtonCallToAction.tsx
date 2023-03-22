interface ButtonCallToActionInt {
  text: string;
  color: string;
  functionOnclick?: any;
}

const ButtonCallToAction = ({
  text,
  color,
  functionOnclick,
}: ButtonCallToActionInt) => {
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
