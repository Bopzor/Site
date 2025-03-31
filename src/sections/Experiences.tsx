import { SectionTitle } from "../components/SectionTitle";
import { Skill } from "../components/Skill";
import type { Data } from "../data";
import { useFormatDate } from "../hooks/useFormatDate";

export function Experiences({ content }: { content: Data }) {
  const formatDate = useFormatDate();

  return (
    <>
      <SectionTitle title={content.experiencesTitle} />

      <div className="col gap-4">
        {content.experiences.map((experience) => (
          <div key={experience.name}>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="font-bold">{experience.job}</div>
                <a
                  className="link italic"
                  href={experience.link}
                  target="_blank"
                >
                  {experience.name}
                </a>
              </div>
              <div className="text-sm italic">
                {formatDate(experience.duration, content.current)}
              </div>
            </div>

            <div className="col">
              <p className="px-2">{experience.description}</p>

              <div className="flex flex-wrap">
                {experience.skills.map((skill) => (
                  <Skill key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
