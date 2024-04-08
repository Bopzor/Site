/// <reference types="vite-plugin-svgr/client" />

import JavaScript from './icons/javascript.svg?react';
import MaterialUi from './icons/Material-ui.svg?react';
import NodeJS from './icons/NodeJS.svg?react';
import ReactIcon from './icons/React.svg?react';
import Redux from './icons/Redux.svg?react';
import TypeScript from './icons/TypeScript.svg?react';
import GitHub from './icons/github.svg?react';
import GitLab from './icons/gitlab.svg?react';
import Tailwindcss from './icons/Tailwindcss.svg?react';
import NestJs from './icons/nestjs.svg?react';
import Docker from './icons/Docker.svg?react';
import CloudBuild from './icons/cloud-build.svg?react';
import Git from './icons/git.svg?react';
import Vue from './icons/vuejs.svg?react';
import Vite from './icons/vite.svg?react';
import Next from './icons/nextjs.svg?react';
import Cypress from './icons/cypress.svg?react';
import TRPC from './icons/trpc.svg?react';
import TestingLibrary from './icons/testing-library.svg?react';
import Jest from './icons/jest.svg?react';
import Vitest from './icons/vitest.svg?react';
import Icon from './Icon';

const skillMap: Record<string, JSX.Element> = {
  TypeScript: <TypeScript />,
  'React.js': <ReactIcon />,
  Tailwindcss: <Tailwindcss />,
  'Node.js': <NodeJS />,
  NestJS: <NestJs />,
  'Material UI': <MaterialUi />,
  Docker: <Docker />,
  'Cloud build': <CloudBuild />,
  Git: <Git />,
  GitHub: <GitHub />,
  GitLab: <GitLab />,
  'Vue.js': <Vue />,
  Vite: <Vite />,
  Cypress: <Cypress />,
  Redux: <Redux />,
  'Next.js': <Next />,
  JavaScript: <JavaScript />,
  TRPC: <TRPC />,
  'testing-library': <TestingLibrary />,
  Jest: <Jest />,
  Vitest: <Vitest />,
};

type SkillProps = {
  skill: string;
};

export function Skill({ skill }: SkillProps) {
  const icon = skillMap[skill] ?? '';

  return (
    <span className="row items-center justify-center p-1">
      {icon && <Icon icon={icon} />}
      {skill}
    </span>
  );
}

export default Skill;
