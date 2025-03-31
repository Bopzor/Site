import { Link, useMatch } from "react-router";

import FrFlag from "../assets/icons/fr-flag.svg?react";
import UsFlag from "../assets/icons/us-flag.svg?react";
import type { Data } from "../data";

export function Header({ content }: { content: Data }) {
  const language = useMatch("/en") ? "en" : "fr";

  const selectedLanguageClass = "scale-125 opacity-100";
  const unselectedLanguageClass = "opacity-50";

  return (
    <>
      <div className="row gap-4">
        <h1 className="text-5xl font-bold text-purple-800">{content.name}</h1>
        <div className="col print:hidden">
          <Link to="/" className="row group items-center gap-2 text-sm">
            <span
              className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
                language === "fr"
                  ? selectedLanguageClass
                  : unselectedLanguageClass
              }`}
            >
              <FrFlag />
            </span>
            <span className="invisible group-hover:visible">{content.fr}</span>
          </Link>

          <Link to="/en" className="row group items-center gap-2 text-sm">
            <span
              className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
                language === "en"
                  ? selectedLanguageClass
                  : unselectedLanguageClass
              }`}
            >
              <UsFlag />
            </span>
            <span className="invisible group-hover:visible">{content.en}</span>
          </Link>
        </div>
      </div>

      <p>{content.description}</p>
    </>
  );
}
