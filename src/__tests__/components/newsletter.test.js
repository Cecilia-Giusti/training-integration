import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Newsletter from "../../components/Newsletter";

describe("Newsletter component", () => {
  test("should display 'Input your email' placeholder text", () => {
    render(<Newsletter />);
    const input = screen.getByPlaceholderText("Input your email");
    expect(input).toBeInTheDocument();
  });

  test("should subscribe to newsletter on button click", () => {
    const spy = jest.spyOn(console, "log");
    render(<Newsletter />);
    const input = screen.getByPlaceholderText("Input your email");
    const button = screen.getByText("Send");
    const email = "test@example.com";

    fireEvent.change(input, { target: { value: email } });
    fireEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(email);
    spy.mockRestore();
  });

  test("should subscribe to newsletter on Enter key press", () => {
    const spy = jest.spyOn(console, "log");
    render(<Newsletter />);
    const input = screen.getByPlaceholderText("Input your email");
    const email = "test@example.com";

    fireEvent.change(input, { target: { value: email } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(email);
    spy.mockRestore();
  });

  test("should subscribe to newsletter on other key press", () => {
    const spy = jest.spyOn(console, "log");
    render(<Newsletter />);
    const input = screen.getByPlaceholderText("Input your email");
    const email = "test@example.com";

    fireEvent.change(input, { target: { value: email } });
    fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

    expect(spy).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });

  test("should not subscribe to newsletter if email is invalid", () => {
    const spy = jest.spyOn(console, "log");
    render(<Newsletter />);
    const input = screen.getByPlaceholderText("Input your email");
    const button = screen.getByText("Send");
    const email = "invalidemail";

    fireEvent.change(input, { target: { value: email } });
    fireEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("Rentre ton email s'il te plait");
    spy.mockRestore();
  });
});
