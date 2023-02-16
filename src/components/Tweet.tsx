import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { Link } from "react-router-dom"
import { useTheme } from "../hooks/useTheme"

import "./Tweet.css"

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  const { theme } = useTheme()

  return (
    <Link to="/status" className={`tweet tweet-${theme}`}>
      <img src="https://github.com/felipe-hvsilva.png" alt="Felipe Silva" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Felipe Silva</strong>
          <span>felipedev</span>
        </div>
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}
