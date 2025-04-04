import { JSX } from "react";

export function Icon({
  icon,
  isGrayscale = true,
}: {
  icon: JSX.Element;
  isGrayscale?: boolean;
}) {
  return (
    <span
      className={[
        "mx-1 inline-block size-4",
        `${isGrayscale ? "grayscale" : ""}`,
      ].join(" ")}
    >
      {icon}
    </span>
  );
}
