"use client";

export default function OptionTile({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full min-h-[48px] px-5 py-4 rounded-card text-left
        font-sans text-[16px] font-medium
        transition-all duration-150 ease
        flex items-center justify-between
        ${
          selected
            ? "border-2 border-primary bg-primary-tint"
            : "border border-accent bg-surface hover:border-primary hover:bg-primary-tint"
        }
      `}
    >
      <span>{label}</span>
      {selected && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="shrink-0 ml-3"
        >
          <path
            d="M4 10.5L8 14.5L16 6.5"
            stroke="#1F3D2B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
