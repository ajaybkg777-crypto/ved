import { useState } from "react";
import { quizQuestions } from "../data/quiz.js";
import Button from "./common/Button.jsx";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const done = step >= quizQuestions.length;
  const question = quizQuestions[step];

  const answer = (index) => {
    if (index === question.answer) setScore((item) => item + 1);
    setStep((item) => item + 1);
  };

  return (
    <section className="section quiz-section">
      <span className="eyebrow">Tiny investigation</span>
      <h2>How well do you know us?</h2>
      <div className="quiz-box">
        {!done ? (
          <>
            <small>{step + 1} / {quizQuestions.length}</small>
            <h3>{question.question}</h3>
            <div className="quiz-options">
              {question.options.map((option, index) => (
                <button key={option} onClick={() => answer(index)}>{option}</button>
              ))}
            </div>
          </>
        ) : (
          <>
            <small>Result</small>
            <h3>You know us surprisingly well.</h3>
            <p>Score: {score} / {quizQuestions.length}. But there is one thing you probably did not know...</p>
            <Button onClick={() => document.querySelector("#vault")?.scrollIntoView({ behavior: "smooth" })}>Continue</Button>
          </>
        )}
      </div>
    </section>
  );
}
