import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Sepator"
import { Tweet } from "../components/Tweet"
import { useTheme } from "../hooks/useTheme"

import "./Status.css"

export function Status() {
  const { theme } = useTheme()

  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "Concordo",
    "Olha faz sentido",
    "Parabéns pelo progresso",
  ])

  function createNewAnswer(e: FormEvent) {
    e.preventDefault()

    setAnswers([...answers, newAnswer])
    setNewAnswer("")
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setAnswers([...answers, newAnswer])
      setNewAnswer("")
    }
  }
  return (
    <main className={`status ${theme}`}>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi culpa vitae sunt, perferendis nulla ut recusandae deleniti fuga maxime libero repellendus ea reiciendis. Temporibus fuga minus neque aut veniam?s" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/felipe-hvsilva.png" alt="Felipe Silva" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => {
              setNewAnswer(e.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span> Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  )
}
