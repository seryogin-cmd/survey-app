export type SurveyQuestion = {
  id: string;
  type: "single" | "multiple";
  question: string;
  options: string[];
};

export type SurveyPage = {
  id: string;
  questions: SurveyQuestion[];
};

type SurveyAnswers = Record<string, string[]>;

export type SurveyState = {
  currentPageIndex: number;
  answers: SurveyAnswers;
  isCompleted: boolean;
};
