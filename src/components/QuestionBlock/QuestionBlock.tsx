import "./QuestionBlock.style.scss";
import { QuestionBlockProps } from "./QuestionBlock.types";

export function QuestionBlock({
  question,
  selectedAnswers,
  onAnswerChange,
}: QuestionBlockProps) {
  const handleSingleSelect = (option: string) => {
    onAnswerChange([option]);
  };

  const handleMultipleSelect = (option: string) => {
    const newAnswers = selectedAnswers.includes(option)
      ? selectedAnswers.filter((answer) => answer !== option)
      : [...selectedAnswers, option];

    onAnswerChange(newAnswers);
  };

  return (
    <div className="question-block">
      <h3 className="question-title">{question.question}</h3>

      <ul className="options-container">
        {question.options.map((option) => (
          <li key={option}>
            <label className="option-label">
              <input
                type={question.type === "single" ? "radio" : "checkbox"}
                name={question.id}
                value={option}
                checked={selectedAnswers.includes(option)}
                onChange={() => {
                  question.type === "single"
                    ? handleSingleSelect(option)
                    : handleMultipleSelect(option);
                }}
                className="option-input visually-hidden"
              />

              <span className="option-checkmark" />
              <span className="option-text">{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
