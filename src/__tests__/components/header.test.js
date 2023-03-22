import { render } from "react-dom";
import Header from "../../components/Header";
import { HashRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

describe("Given the user is on the home page", () => {
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
  describe("When the header is visible", () => {
    test("Then the logo should be visible", () => {
      render(
        <HashRouter>
          <Header />
        </HashRouter>,
        root
      );

      const logo = screen.getByRole("img");
      expect(logo).toBeTruthy();
    });

    test("Then the nav should be visible", () => {
      render(
        <HashRouter>
          <Header />
        </HashRouter>,
        root
      );

      const nav = screen.getByRole("navigation");
      const homeLink = screen.getByTestId("nav-home");
      const serviceLink = screen.getByTestId("nav-service");

      expect(nav).toContainElement(homeLink);
      expect(nav).toContainElement(serviceLink);
    });
  });

  describe("When the user use a tablet or a smartphone", () => {
    test("Then the header should be closed", () => {
      render(
        <HashRouter>
          <Header />
        </HashRouter>,
        root
      );

      // Header
      const header = screen.getByTestId("header");
      expect(header).toHaveClass("header");
    });
  });
});
