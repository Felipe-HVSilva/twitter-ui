import { Sparkle } from "phosphor-react"
import { useTheme } from "../hooks/useTheme"

import "./Header.css"

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  const { theme } = useTheme()
  return (
    <div className={`timeline-header ${theme}`}>
      {props.title}
      <Sparkle />
    </div>
  )
}
