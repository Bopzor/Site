export function SectionTitle({
  title,
  size = "normal",
}: {
  title: string;
  size?: "small" | "normal";
}) {
  const sizeClasses = {
    normal: "text-2xl print:text-1xl",
    small: "text-1xl print text-md",
  };

  return (
    <div className="row items-center gap-2">
      <div className="h-0.5 flex-1 bg-purple-800" />
      <div className="text-wrap text-center">
        <h2
          className={["my-2 font-bold text-purple-800", sizeClasses[size]].join(
            " "
          )}
        >
          {title}
        </h2>
      </div>
      <div className="h-0.5 flex-1 bg-purple-800" />
    </div>
  );
}
