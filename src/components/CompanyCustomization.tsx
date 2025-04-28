import { useSearchParams } from "react-router";
import { Data } from "../data";

export function CompanyCustomization({ content }: { content: Data }) {
  const [searchParams] = useSearchParams();

  return (
    <>
      {content.background[searchParams.get("company") ?? ""] && (
        <img
          className="absolute top-0 left-0 pointer-events-none"
          src={content.background[searchParams.get("company") ?? ""]}
        />
      )}
    </>
  );
}
