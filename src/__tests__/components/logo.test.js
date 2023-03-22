import { render } from "react-dom";
import Logo from "../../components/Logo";
import { screen } from "@testing-library/react";

describe("Given the component is called", () => {
  let root;

  beforeEach(() => {
    root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
    root = null;
  });

  test("Then the component should be mounted", () => {
    render(<Logo />, root);
    const logo = screen.getByRole("img");
    expect(logo).toBeTruthy();

    const name = screen.getByTestId("entreprise-name");
    expect(name).toBeTruthy();
  });
});
