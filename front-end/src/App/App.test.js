import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { createRouterProvider } from "../testSetup/testRouters";
import App from "./App";

// https://testing-library.com/docs/react-testing-library/intro
// https://testing-library.com/docs/react-testing-library/example-intro
// https://github.com/testing-library/jest-dom

test("App renders", () => {
  render(createRouterProvider(<App />));
  expect(screen.getByText("Hello world!")).toBeInTheDocument();
});
