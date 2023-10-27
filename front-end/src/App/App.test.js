import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { useAppRouter } from "../testSetup/testRouters";

// https://testing-library.com/docs/react-testing-library/intro
// https://testing-library.com/docs/react-testing-library/example-intro
// https://testing-library.com/docs/guide-disappearance/#waiting-for-appearance
// https://github.com/testing-library/jest-dom

test("App renders without errors", () => {
  render(useAppRouter(["/"]));
  expect(screen.queryByText("Oops!")).not.toBeInTheDocument();
  expect(screen.queryByText("unexpected error", {exact: false})).not.toBeInTheDocument();
});

test("Invalid unmatched paths return a 404 message", () => {
  render(useAppRouter(["/does-not-exist"]));
  expect(screen.getByText("404 (Not Found)")).toBeInTheDocument();
});

test("Invalid collection paths return a 404 message", async () => {
  render(useAppRouter(["/collections/does-not-exist"]));
  const notFoundHeading = await screen.findByText("404 (Not Found)");
  expect(notFoundHeading).toBeInTheDocument();
});

test("PhotoFeed is rendered on the homepage", async () => {
  render(useAppRouter(["/"]));
  const feedHeading = await screen.findByText("Photography by Chris Mastris");
  expect(feedHeading).toBeInTheDocument();
});

test("PhotoFeed is rendered on collection pages", async () => {
  render(useAppRouter(["/collections/landscapes"]));
  const feedHeading = await screen.findByText("Photography by Chris Mastris");
  expect(feedHeading).toBeInTheDocument();
});
