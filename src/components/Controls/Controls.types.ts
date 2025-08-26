export type ControlsProps = {
  currentPageIndex: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  isNextDisabled: boolean;
};
