import { useSearchParams } from "react-router";
import { Data } from "../data";

export function CompanyCustomization({
  content,
  className,
}: {
  content: Data;
  className?: string;
}) {
  const [searchParams] = useSearchParams();

  return (
    <>
      {content.background[searchParams.get("company") ?? ""] && (
        <img
          className={["absolute top-0 left-0 pointer-events-none", className]
            .filter(Boolean)
            .join(" ")}
          src={content.background[searchParams.get("company") ?? ""]}
        />
      )}
    </>
  );
}
