export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6">{children}</div>;
}

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 ${className || ""}`}>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-[15px] leading-7 text-zinc-700">{children}</div>
    </section>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={`border-t border-zinc-200/70 ${className || ""}`} />;
}
