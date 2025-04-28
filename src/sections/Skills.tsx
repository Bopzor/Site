import { SectionTitle } from "../components/SectionTitle";
import { useCVContext } from "../contexts/CVContext";
import type { Data } from "../data";

export function Skills({ content }: { content: Data }) {
  const { setHoveredSkill } = useCVContext();

  return (
    <>
      <SectionTitle title={content.hardSkillsTitle} size="small" />

      <div className="col flex-wrap gap-2">
        {content.skills.hard.map(({ title, skills }) => (
          <div key={title}>
            <div className="text-sm font-bold">{title}</div>

            <div className="row gap-x-6 gap-y-1 flex-wrap print:text-sm">
              {skills.map((skill) => (
                <div
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  key={skill}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}

        <SectionTitle title={content.softSkillsTitle} size="small" />
        {content.skills.soft.map(({ title, skills }) => (
          <div key={title}>
            <div className="text-sm font-bold">{title}</div>

            <div className="row gap-x-6 gap-y-1 flex-wrap print:text-sm">
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
