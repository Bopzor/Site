import { Link, useSearchParams } from "react-router";

import FrFlag from "../assets/icons/fr-flag.svg?react";
import UsFlag from "../assets/icons/us-flag.svg?react";
import { Data } from "../data";

export function Language({ content }: { content: Data }) {
  const [searchParams] = useSearchParams();

  const selectedLanguageClass = "scale-125 opacity-100";
  const unselectedLanguageClass = "opacity-50";

  return (
    <div className="col print:hidden">
      <Link
        to={{ search: "" }}
        className="row group items-center gap-2 text-sm"
      >
        <span
          className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
            searchParams.get("language") === "en"
              ? unselectedLanguageClass
              : selectedLanguageClass
          }`}
        >
          <FrFlag />
        </span>
        <span className="hidden md:block md:invisible md:group-hover:visible">
          {content.fr}
        </span>
      </Link>

      <Link
        to={{ search: "?language=en" }}
        className="row group items-center gap-2 text-sm"
      >
        <span
          className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
            searchParams.get("language") === "en"
              ? selectedLanguageClass
              : unselectedLanguageClass
          }`}
        >
          <UsFlag />
        </span>
        <span className="hidden md:block md:invisible md:group-hover:visible">
          {content.en}
        </span>
      </Link>
    </div>
  );
}
