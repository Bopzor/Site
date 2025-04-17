import { Link, useMatch } from "react-router";

import FrFlag from "../assets/icons/fr-flag.svg?react";
import UsFlag from "../assets/icons/us-flag.svg?react";
import QRCode from "../assets/icons/qrcode.svg?react";
import type { Data } from "../data";

export function Header({ content }: { content: Data }) {
  return (
    <section>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="row flex-wrap items-center print:justify-between">
            <div className="row items-center gap-4">
              <h1 className="text-5xl font-bold text-purple-800">
                {content.name}
              </h1>
              <Language content={content} />
            </div>
          </div>

          <h2 className="text-3xl font-bold">{content.job}</h2>
          <p className="text-xs">{content.description}</p>
        </div>

        <div className="ml-auto">
          <QRCode className="w-[100px] print:w-[80px] hidden md:block" />
        </div>
      </div>
    </section>
  );
}

function Language({ content }: { content: Data }) {
  const language = useMatch("/en") ? "en" : "fr";

  const selectedLanguageClass = "scale-125 opacity-100";
  const unselectedLanguageClass = "opacity-50";

  return (
    <div className="col print:hidden">
      <Link to="/" className="row group items-center gap-2 text-sm">
        <span
          className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
            language === "fr" ? selectedLanguageClass : unselectedLanguageClass
          }`}
        >
          <FrFlag />
        </span>
        <span className="hidden md:block md:invisible md:group-hover:visible">
          {content.fr}
        </span>
      </Link>

      <Link to="/en" className="row group items-center gap-2 text-sm">
        <span
          className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
            language === "en" ? selectedLanguageClass : unselectedLanguageClass
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
