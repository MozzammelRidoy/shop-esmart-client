import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import router from "./routes";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </div>
);
