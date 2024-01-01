import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const suffledAnswer = useRef();

  if (!suffledAnswer.current) {
    suffledAnswer.current = [...answers];
    suffledAnswer.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {suffledAnswer.current.map((answer) => {
        let cssClass = "";
        const isSelected = selectedAnswer === answer;

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          answerState === "correct" ||
          (answerState === "wrong" && isSelected)
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
