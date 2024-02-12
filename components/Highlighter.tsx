import { HighlighterProps } from "@/types";

const Highlighter = ({ title, containerStyles, backgroundColor }: HighlighterProps) => {
  return (
    <div
      className={`custom-btn ${containerStyles}`}
      style={{ backgroundColor, color: 'black' }}
    >
      <p className="flex-1 text-sm">{title}</p>
    </div>
  );
};

export default Highlighter;
