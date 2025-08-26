import "./Controls.style.scss";
import { ControlsProps } from "./Controls.types";

export function Controls({
  currentPageIndex,
  totalPages,
  onNext,
  onPrevious,
  isNextDisabled,
}: ControlsProps) {
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === totalPages - 1;

  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPage}
        className="control-button control-button--previous"
      >
        Назад
      </button>

      <span className="page-indicator">
        Страница {currentPageIndex + 1} из {totalPages}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={isNextDisabled}
        className="control-button control-button--next"
      >
        {isLastPage ? "Завершить" : "Далее"}
      </button>
    </div>
  );
}
