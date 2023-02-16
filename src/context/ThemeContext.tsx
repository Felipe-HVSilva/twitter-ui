import { createContext, useState, ReactNode } from "react"

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextType {
  theme: string
  handleTheme: () => void
}

interface ThemeContextProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState("light")

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark")
      console.log("dark")
    } else {
      setTheme("light")
      console.log("light")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
