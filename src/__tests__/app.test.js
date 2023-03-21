import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App component with Header, Home, and Footer", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
