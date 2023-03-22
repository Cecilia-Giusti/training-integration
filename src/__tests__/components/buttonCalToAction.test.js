import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonCallToAction from "../../components/ButtonCallToAction";
import { screen } from "@testing-library/react";

describe("Given the component is called", () => {
  test("Then the component should be mounted", () => {
    render(<ButtonCallToAction text='Test button' color='white' />);
    const button = screen.getByText("Test button");
    expect(button).toBeInTheDocument();
  });

  test("calls functionOnclick when the button is clicked", () => {
    const handleClick = jest.fn();
    render(
      <ButtonCallToAction
        text='Test button'
        color='white'
        functionOnclick={handleClick}
      />
    );
    fireEvent.click(screen.getByText("Test button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
