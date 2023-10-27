import { createBrowserRouter } from "react-router-dom";

import App from "./App/App";
import FallbackErrorPage from "./components/FallbackErrorPage/FallbackErrorPage";
import { PhotoFeed, photoFeedLoader } from "./features/photos/PhotoFeed";


// https://reactrouter.com/en/main/routers/create-browser-router
export const routingConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <FallbackErrorPage />,
    children: [
      {
        path: "",
        element: <PhotoFeed />,
        loader: photoFeedLoader,
      },
    ]
  },
];

export const router = createBrowserRouter(routingConfig);
