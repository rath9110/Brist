export default function CTACard({
  headline,
  body,
  children,
  onAction,
  actionLabel,
}: {
  headline: string;
  body?: string;
  children?: React.ReactNode;
  onAction?: () => void;
  actionLabel?: string;
}) {
  return (
    <div className="bg-surface rounded-card p-6 border-l-4 border-primary shadow-sm">
      <h3 className="font-serif text-[20px] text-text mb-2">{headline}</h3>
      {body && (
        <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
          {body}
        </p>
      )}
      {children}
      {onAction && actionLabel && (
        <button type="button" onClick={onAction} className="btn-cta mt-4">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
