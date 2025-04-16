import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import type { Data } from "../data";

export function Formations({ content }: { content: Data }) {
  return (
    <section>
      <SectionTitle title={content.formationTitle} />

      <div className="md:grid md:grid-cols-4 text-sm">
        {content.formations.map(({ name, date, school }) => (
          <React.Fragment key={name}>
            <div className="md:col-span-3">
              <div className="row flex-wrap gap-2">
                <div className="font-bold">{name}</div>

                <a
                  href={`https://${school.link}`}
                  className="link italic"
                  target="_blank"
                >
                  {school.name}
                </a>
              </div>
            </div>
            <div className="italic md:text-right">{date}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
