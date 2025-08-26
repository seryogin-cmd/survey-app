import type { SurveyPage } from "../types/survey.types";

export const SURVEY_DATA: SurveyPage[] = [
  {
    id: "page-1",
    questions: [
      {
        id: "q1",
        type: "single",
        question: "Какой ваш любимый цвет?",
        options: ["Красный", "Синий", "Зеленый", "Желтый"],
      },
    ],
  },
  {
    id: "page-2",
    questions: [
      {
        id: "q2",
        type: "multiple",
        question: "Какие жанры книг вы предпочитаете?",
        options: ["Фантастика", "Детективы", "Романы", "Научная литература"],
      },
    ],
  },
  {
    id: "page-3",
    questions: [
      {
        id: "q3",
        type: "single",
        question: "Как часто вы читаете книги?",
        options: [
          "Ежедневно",
          "Несколько раз в неделю",
          "Раз в неделю",
          "Редко",
        ],
      },
    ],
  },
];
