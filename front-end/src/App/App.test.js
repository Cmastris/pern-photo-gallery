import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders", () => {
  render(<App />);
  const text = screen.getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
