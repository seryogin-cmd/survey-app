import { useState, useMemo } from "react";
import { QuestionBlock } from "./components/QuestionBlock";
import { ProgressBar } from "./components/ProgressBar";
import { Controls } from "./components/Controls";
import { SURVEY_DATA } from "./data/surveyData";
import { SurveyState } from "./types/survey.types";
import "./App.style.scss";

function App() {
  const [surveyState, setSurveyState] = useState<SurveyState>({
    currentPageIndex: 0,
    answers: {},
    isCompleted: false,
  });

  const currentPage = SURVEY_DATA[surveyState.currentPageIndex];
  const progress = (surveyState.currentPageIndex / SURVEY_DATA.length) * 100;

  const isCurrentPageComplete = useMemo(() => {
    return currentPage.questions.every((question) => {
      const questionAnswers = surveyState.answers[question.id] || [];
      return questionAnswers.length > 0;
    });
  }, [currentPage, surveyState.answers]);

  const handleAnswerChange = (questionId: string, answers: string[]) => {
    setSurveyState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answers,
      },
    }));
  };

  const handleNext = () => {
    if (surveyState.currentPageIndex < SURVEY_DATA.length - 1) {
      setSurveyState((prev) => ({
        ...prev,
        currentPageIndex: prev.currentPageIndex + 1,
      }));
    } else {
      setSurveyState((prev) => ({
        ...prev,
        isCompleted: true,
      }));
    }
  };

  const handlePrevious = () => {
    setSurveyState((prev) => ({
      ...prev,
      currentPageIndex: Math.max(0, prev.currentPageIndex - 1),
    }));
  };

  if (surveyState.isCompleted) {
    return (
      <section className="app-container">
        <ProgressBar progress={100} />

        <p className="completion-message">
          Опрос завершен! Спасибо за участие!
        </p>
      </section>
    );
  }

  return (
    <section className="app-container">
      <ProgressBar progress={progress} />

      <div className="questions-container">
        {currentPage.questions.map((question) => (
          <QuestionBlock
            key={question.id}
            question={question}
            selectedAnswers={surveyState.answers[question.id] || []}
            onAnswerChange={(answers) =>
              handleAnswerChange(question.id, answers)
            }
          />
        ))}
      </div>

      <Controls
        currentPageIndex={surveyState.currentPageIndex}
        totalPages={SURVEY_DATA.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isNextDisabled={!isCurrentPageComplete}
      />
    </section>
  );
}

export default App;
