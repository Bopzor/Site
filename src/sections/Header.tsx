import { useSearchParams } from "react-router";
import { Language } from "../components/Language";
import { QRCode } from "../components/QRCode";
import { getSearchParamsUrl, type Data } from "../data";

export function Header({ content }: { content: Data }) {
  const [searchParams] = useSearchParams();

  return (
    <section>
      <div className="grid md:grid-cols-4">
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
          <QRCode
            url={`${content.website}/contact/${getSearchParamsUrl(
              searchParams.get("language"),
              searchParams.get("company")
            )}`}
          />
        </div>
      </div>
    </section>
  );
}
