import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routingConfig } from "../routing";

// https://reactrouter.com/en/main/routers/create-memory-router

export function useAppRouter(initialEntries) {
  // Create a `RouterProvider` using the real app router config defined in router.js
  // https://stackoverflow.com/questions/74399490/how-to-test-routing-logic-with-react-router-v6-and-testing-library
  const router = createMemoryRouter(
    routingConfig,
    { initialEntries }
  );
  return <RouterProvider router={router} />
}

export function createRouterProvider(component, path = "/", initialEntries = ["/"]) {
  // Create a simple mock `RouterProvider`
  // This is required when rendering components that use React Router functions/components
  // even if routing isn't being tested
  const mockRouter = createMemoryRouter(
    [{ path: path, element: component }],
    { initialEntries }
  );
  return <RouterProvider router={mockRouter} />
}
