import { SectionTitle } from "../components/SectionTitle";
import type { Data } from "../data";

export function Formations({ content }: { content: Data }) {
  return (
    <>
      <SectionTitle title={content.formationTitle} />

      <div className="flex flex-wrap gap-2 text-sm ">
        {content.formations.map(({ name, date, school }) => (
          <div key={name}>
            <div className="font-bold">{name}</div>
            <div className="row justify-between">
              <a
                href={`https://${school.link}`}
                className="link italic"
                target="_blank"
              >
                {school.name}
              </a>
              <div className="text-sm italic">{date}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
