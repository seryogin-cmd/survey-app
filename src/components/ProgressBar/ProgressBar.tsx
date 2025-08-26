import "./ProgressBar.style.scss";
import { ProgressBarProps } from "./ProgressBar.types";

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <span className="progress-text">{Math.round(progress)}% завершено</span>
    </div>
  );
}
