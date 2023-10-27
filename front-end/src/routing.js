import { createBrowserRouter } from "react-router-dom";

import App from "./App/App";
import FallbackErrorPage from "./components/FallbackErrorPage/FallbackErrorPage";


// https://reactrouter.com/en/main/routers/create-browser-router
export const routingConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <FallbackErrorPage />,
  },
];

export const router = createBrowserRouter(routingConfig);
