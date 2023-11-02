import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { useAppRouter } from "../testSetup/testRouters";

// https://testing-library.com/docs/react-testing-library/intro
// https://testing-library.com/docs/react-testing-library/example-intro
// https://testing-library.com/docs/guide-disappearance/#waiting-for-appearance
// https://github.com/testing-library/jest-dom

// Ignore errors caused by scroll to top functionality
window.scrollTo = jest.fn();
afterAll(() => {
  jest.clearAllMocks();
});

// Valid path routing

test("App renders without errors", () => {
  render(useAppRouter(["/"]));
  expect(screen.queryByText("Oops!")).not.toBeInTheDocument();
  expect(screen.queryByText("unexpected error", {exact: false})).not.toBeInTheDocument();
});

test("Header is rendered on the homepage", async () => {
  render(useAppRouter(["/"]));
  const feedHeading = await screen.findByRole("link", { name: "Chris Mastris" });
  expect(feedHeading).toBeInTheDocument();
});

test("PhotoFeed is rendered on the homepage", async () => {
  render(useAppRouter(["/"]));
  const feedHeading = await screen.findByRole("heading", { name: "Photography by Chris Mastris" });
  expect(feedHeading).toBeInTheDocument();
});

test("Header is rendered on collection pages", async () => {
  render(useAppRouter(["/collections/landscapes"]));
  const feedHeading = await screen.findByRole("link", { name: "Chris Mastris" });
  expect(feedHeading).toBeInTheDocument();
});

test("PhotoFeed is rendered on collection pages", async () => {
  render(useAppRouter(["/collections/landscapes"]));
  const feedHeading = await screen.findByRole("heading", { name: "Landscapes" });
  expect(feedHeading).toBeInTheDocument();
});

test("PhotoDetailPage is rendered on photo detail pages", async () => {
  render(useAppRouter(["/photos/lake-bled-viewpoint-slovenia"]));
  const pageHeading = await screen.findByRole("heading", { name: "Lake Bled Viewpoint, Slovenia" });
  expect(pageHeading).toBeInTheDocument();
});


// Invalid path routing

test("Invalid unmatched paths return a 404 message", () => {
  render(useAppRouter(["/does-not-exist"]));
  expect(screen.getByText("404 (Not Found)")).toBeInTheDocument();
});

test("Invalid collection paths return a 404 message", async () => {
  render(useAppRouter(["/collections/does-not-exist"]));
  const notFoundHeading = await screen.findByText("404 (Not Found)");
  expect(notFoundHeading).toBeInTheDocument();
});

test("Invalid photo paths return a 404 message", async () => {
  render(useAppRouter(["/photos/does-not-exist"]));
  const notFoundHeading = await screen.findByText("404 (Not Found)");
  expect(notFoundHeading).toBeInTheDocument();
});
