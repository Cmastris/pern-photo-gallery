import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { useAppRouter } from "../testSetup/testRouters";

// https://testing-library.com/docs/react-testing-library/intro
// https://testing-library.com/docs/react-testing-library/example-intro
// https://github.com/testing-library/jest-dom

test("App renders", () => {
  render(useAppRouter(["/"]));
  expect(screen.getByText("Hello world!")).toBeInTheDocument();
});

test("Invalid paths return a 404 message", () => {
  render(useAppRouter(["/does-not-exist"]));
  expect(screen.getByText("404 (Not Found)")).toBeInTheDocument();
});
