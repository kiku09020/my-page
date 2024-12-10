import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./features/router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/my-page">
      <RouterProvider router={Router()} />
    </BrowserRouter>
  </StrictMode>
);
