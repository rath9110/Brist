"use client";

export default function ProgressBar({
  current,
  total,
  pulse = false,
}: {
  current: number;
  total: number;
  pulse?: boolean;
}) {
  const pct = Math.min(100, (current / total) * 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-accent">
      <div
        className={`h-full bg-primary transition-all duration-300 ease-out ${pulse ? "progress-pulse" : ""}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
