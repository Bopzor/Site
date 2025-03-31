type CommonExperience = {
  name: string;
  link: string;
  duration: {
    start: string;
    end?: string;
  };
  skills: string[];
};

export type CommonData = {
  name: string;
  description: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  experiences: Record<string, CommonExperience>;
  skills: Record<string, string[]>;
  formations: Record<string, Omit<Formation, "name">>;
};

type TranslatedExperience = {
  job: string;
  description: string;
};

export type TranslatedData = {
  description: string;
  about: string;
  skillsTitle: string;
  experiencesTitle: string;
  experiences: Record<string, TranslatedExperience>;
  current: string;
  interestsTitle: string;
  interests: Interest[];
  en: string;
  fr: string;
  skills: Record<string, { title: string }>;
  formationTitle: string;
  formations: Record<string, { name: string }>;
};

type Interest = {
  title: string;
  activities: string[];
};

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

type Skill = { title: string; skills: string[] };

type Formation = {
  name: string;
  date: string;
  school: {
    name: string;
    link: string;
  };
};

export type Data = {
  name: string;
  description: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  skillsTitle: string;
  experiencesTitle: string;
  experiences: Experience[];
  interestsTitle: string;
  interests: Interest[];
  current: string;
  en: string;
  fr: string;
  skills: Skill[];
  formationTitle: string;
  formations: Formation[];
};

export function mergeData(
  {
    experiences: commonExperiences,
    skills: commonSkills,
    formations: commonFormations,
    ...commonData
  }: CommonData,
  {
    experiences: translatedExperiences,
    skills: translatedSkills,
    formations: translatedFormations,
    ...translatedData
  }: TranslatedData
): Data {
  const experiences: Experience[] = [];
  for (const [expKey, experience] of Object.entries(commonExperiences)) {
    experiences.push({
      ...experience,
      ...translatedExperiences[expKey],
    });
  }

  const skills: Skill[] = [];
  for (const [skillKey, skill] of Object.entries(commonSkills)) {
    skills.push({
      skills: skill,
      ...translatedSkills[skillKey],
    });
  }

  const formations: Formation[] = [];
  for (const [formationKey, formation] of Object.entries(commonFormations)) {
    formations.push({
      ...formation,
      ...translatedFormations[formationKey],
    });
  }

  return { ...commonData, ...translatedData, experiences, skills, formations };
}
