import { SurveyQuestion } from "src/types/survey.types";

export type QuestionBlockProps = {
  question: SurveyQuestion;
  selectedAnswers: string[];
  onAnswerChange: (answers: string[]) => void;
};
