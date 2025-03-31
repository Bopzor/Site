export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="row items-center gap-2">
      <div className="h-0.5 flex-1 bg-purple-800" />
      <h2 className="my-2 text-2xl font-bold text-purple-800">{title}</h2>
      <div className="h-0.5 flex-1 bg-purple-800" />
    </div>
  );
}
