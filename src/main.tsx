import React from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"

import "./global.css"

import { router } from "./routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
