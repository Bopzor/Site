import { useMatch } from 'react-router';
import Skill from './Skill';

export type Experience = {
  name: string;
  link: string;
  duration: {
    start: string;
    end?: string;
  };
  job: string;
  description: string;
  skills: string[];
};

export function Timeline({ experiences, current }: { experiences: Experience[]; current: string }) {
  const formatDate = useFormatDate();

  return (
    <div className="col">
      {experiences.map((experience, index) => {
        const isEven = index % 2 !== 0;
        const textAlign = isEven ? 'text-left' : 'text-right';

        return (
          <div className="row gap-2" key={experience.name}>
            {index % 2 !== 0 && (
              <>
                <div className="row flex-1 flex-wrap justify-end self-center">
                  {experience.skills.map((skill) => (
                    <Skill key={skill} skill={skill} />
                  ))}
                </div>
                <Marker />
              </>
            )}
            <div className="flex-1">
              <>
                <p className={`${textAlign} px-1 font-bold capitalize`}>
                  <span className="pr-1">{formatDate(experience.duration, current)}</span>
                  <a className="link" href={experience.link} target="_blank">
                    {experience.name}
                  </a>
                </p>
                <p className="italic">{experience.job}</p>
                <p>{experience.description}</p>
              </>
            </div>
            {index % 2 === 0 && (
              <>
                <Marker />
                <div className="row flex-1 flex-wrap justify-start self-center">
                  {experience.skills.map((skill) => (
                    <Skill key={skill} skill={skill} />
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Marker({ small }: { small?: boolean }) {
  const size = small ? 'size-3' : 'size-4';

  return (
    <div className="col items-center">
      <div className="col absolute h-6 justify-center">
        <div className={`${size} rounded-full bg-slate-700`} />
      </div>
      <div className="h-full w-1 bg-slate-500"></div>
    </div>
  );
}

function useFormatDate() {
  const language = useMatch('/en') ? 'en' : 'fr';

  return (duration: { start: string; end?: string }, current: string) => {
    const start = new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long' }).format(
      new Date(duration.start)
    );

    const end = duration.end
      ? new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long' }).format(
          new Date(duration.end)
        )
      : current;

    if (start === end) {
      return start;
    }

    return `${start} - ${end}`;
  };
}
