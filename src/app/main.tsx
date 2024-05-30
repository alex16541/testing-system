import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/App";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "./providers/router/config/appRoutes";
import { StoreProvider } from "./providers/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: Object.values(appRoutes),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
);
