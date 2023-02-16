import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { useTheme } from "../hooks/useTheme"

import "./Default.css"

export function Default() {
  const { theme } = useTheme()

  return (
    <div className={`layout ${theme}`}>
      <div className="container">
        <Sidebar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
