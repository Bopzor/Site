import { useSearchParams } from "react-router";
import { useAppContext } from "./contexts/AppContext";
import { CVContextProvider } from "./contexts/CVContext";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experiences } from "./sections/Experiences";
import { Formations } from "./sections/Formations";
import { Header } from "./sections/Header";
import { Interests } from "./sections/Interests";
import { Skills } from "./sections/Skills";

export function CV() {
  const content = useAppContext();
  const [searchParams] = useSearchParams();

  return (
    <CVContextProvider>
      <div className="print:pt-2 pt-4 col gap-2 print:py-0 relative">
        {content.background[searchParams.get("company") ?? ""] && (
          <img
            className="absolute top-0"
            src={content.background[searchParams.get("company") ?? ""]}
          />
        )}

        <div className="py-4 print:py-0">
          <div className="px-10">
            <Header content={content} />
          </div>
        </div>

        <div className="md:grid md:grid-cols-7">
          <div className="col bg-gray-200 md:col-span-2">
            <About content={content} />

            <div className="col p-4 gap-2">
              <Contact content={content} />

              <Skills content={content} />
            </div>
          </div>

          <div className="col gap-y-1 md:col-span-5 px-4">
            <Experiences content={content} />
            <Formations content={content} />
            <Interests content={content} />
          </div>
        </div>
      </div>
    </CVContextProvider>
  );
}
