import { useTheme } from "../hooks/useTheme"

import "./Separator.css"

export function Separator() {
  const { theme } = useTheme()
  return <div className={`separator separator-${theme}`} />
}
