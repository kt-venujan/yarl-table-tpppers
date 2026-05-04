export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-8">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-800" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-widest text-gray-600">
          {label}
        </span>
        <div className="flex-1 h-px bg-gray-800" aria-hidden="true" />
      </div>
    </div>
  );
}
