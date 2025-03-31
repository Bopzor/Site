import { SectionTitle } from "../components/SectionTitle";
import type { Data } from "../data";

export function Skills({ content }: { content: Data }) {
  return (
    <>
      <SectionTitle title={content.skillsTitle} />

      <div className="col flex-wrap gap-2 ">
        {content.skills.map(({ title, skills }) => (
          <div key={title}>
            <div className="text-sm font-bold">{title}</div>

            <div className="row gap-x-6 gap-y-1 flex-wrap">
              {skills.map((skill) => (
                <div key={skill}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
