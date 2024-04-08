import { Link, useMatch } from 'react-router-dom';

import Mail from './components/icons/mail.svg?react';
import Linkedin from './components/icons/linkedin.svg?react';
import GitHub from './components/icons/github.svg?react';
import Website from './components/icons/website.svg?react';
import UsFlag from './components/icons/us-flag.svg?react';
import FrFlag from './components/icons/fr-flag.svg?react';
import { Experience, Timeline } from './components/Timeline';
import Icon from './components/Icon';

type Interest = {
  title: string;
  activities: string[];
};

export type Data = {
  name: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  experiencesTitle: string;
  experiences: Experience[];
  interestsTitle: string;
  interests: Interest[];
  current: string;
  en: string;
  fr: string;
};

export function CV({ content }: { content: Data }) {
  const language = useMatch('/en') ? 'en' : 'fr';

  return (
    <div id="cv" className="p-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <div>
            <div className="row mb-2 items-center gap-2">
              <h1 className="text-5xl font-bold text-purple-800">{content.name}</h1>
              <div id="lang" className="col">
                <Link to="/" className="row group items-center gap-2 text-sm">
                  <span
                    className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
                      language === 'fr' ? 'scale-125 opacity-100' : 'opacity-50'
                    }`}
                  >
                    <FrFlag />
                  </span>
                  <span className="invisible group-hover:visible">{content.fr}</span>
                </Link>

                <Link to="/en" className="row group items-center gap-2 text-sm">
                  <span
                    className={`mx-1 inline-block w-7 cursor-pointer group-hover:scale-125 ${
                      language === 'en' ? 'scale-125 opacity-100' : 'opacity-50'
                    }`}
                  >
                    <UsFlag />
                  </span>
                  <span className="invisible group-hover:visible">{content.en}</span>
                </Link>
              </div>
            </div>

            <p>{content.description}</p>
          </div>
        </div>

        <div className="row col-span-2 justify-end">
          <div className="col">
            <WithRightIcon icon={<Mail />}>
              <a href={`mailto:${content.email}`} target="_blank">
                {content.email}
              </a>
            </WithRightIcon>

            <WithRightIcon icon={<Linkedin />}>
              <a href={`https://${content.linkedin}`} target="_blank">
                {content.linkedin}
              </a>
            </WithRightIcon>

            <WithRightIcon icon={<GitHub />}>
              <a href={`https://${content.github}`} target="_blank">
                {content.github}
              </a>
            </WithRightIcon>

            <WithRightIcon icon={<Website />}>
              <a href={`https://${content.website}`} target="_blank">
                {content.website}
              </a>
            </WithRightIcon>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title={content.experiencesTitle} />

        <Timeline experiences={content.experiences} current={content.current} />
      </div>

      <SectionTitle title={content.interestsTitle} />

      <div className="row justify-between gap-2">
        {content.interests.map(({ title, activities }) => (
          <InterestColumn title={title} key={title}>
            {activities.map((activity) => {
              return <p key={activity}>{activity}</p>;
            })}
          </InterestColumn>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="row items-center gap-2">
      <div className="h-0.5 flex-1 bg-purple-800" />
      <h2 className="my-2 text-2xl font-bold text-purple-800">{title}</h2>
      <div className="h-0.5 flex-1 bg-purple-800" />
    </div>
  );
}

function InterestColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="col flex-1">
      <p className="text-center text-lg font-semibold">{title}</p>
      {children}
    </div>
  );
}

function WithRightIcon({ children, icon }: { children: React.ReactNode; icon: JSX.Element }) {
  return (
    <span className="row items-center p-1">
      <Icon icon={icon} />
      {children}
    </span>
  );
}
