import { render } from "react-dom";
import Footer from "../../components/Footer";
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
  describe("When the footer is visible", () => {
    test("Then the logo should be visible", () => {
      render(
        <HashRouter>
          <Footer />
        </HashRouter>,
        root
      );

      const logo = screen.getByRole("img");
      expect(logo).toBeTruthy();
    });

    test("Then the services list should be visible", () => {
      render(
        <HashRouter>
          <Footer />
        </HashRouter>,
        root
      );
      expect(screen.getByTestId("services-list")).toBeInTheDocument();
    });

    test("Then the community list should be visible", () => {
      render(
        <HashRouter>
          <Footer />
        </HashRouter>,
        root
      );

      expect(screen.getByTestId("community-list")).toBeInTheDocument();
    });

    test("Then the socials network list should be visible", () => {
      render(
        <HashRouter>
          <Footer />
        </HashRouter>,
        root
      );

      expect(screen.getByTestId("social-network-list")).toBeInTheDocument();
    });
  });
});
