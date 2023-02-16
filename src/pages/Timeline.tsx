import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Sepator"
import { Tweet } from "../components/Tweet"
import { useTheme } from "../hooks/useTheme"

import "./Timeline.css"

export function TimeLine() {
  const { theme } = useTheme()

  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "Meu primeiro Tweet",
    "Teste",
    "Deu certo tweetar!",
  ])

  function createNewTweet(e: FormEvent) {
    e.preventDefault()

    setTweets([...tweets, newTweet])
    setNewTweet("")
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweets([...tweets, newTweet])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className={`new-tweet-form ${theme}`}>
        <label htmlFor="tweet">
          <img src="https://github.com/felipe-hvsilva.png" alt="Felipe Silva" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => setNewTweet(e.target.value)}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
