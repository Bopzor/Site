import { JSX } from "react";

import CloudBuild from "../assets/icons/cloud-build.svg?react";
import Cypress from "../assets/icons/cypress.svg?react";
import Docker from "../assets/icons/Docker.svg?react";
import Git from "../assets/icons/git.svg?react";
import GitHub from "../assets/icons/github.svg?react";
import GitLab from "../assets/icons/gitlab.svg?react";
import JavaScript from "../assets/icons/javascript.svg?react";
import Jest from "../assets/icons/jest.svg?react";
import MaterialUi from "../assets/icons/Material-ui.svg?react";
import NestJs from "../assets/icons/nestjs.svg?react";
import Next from "../assets/icons/nextjs.svg?react";
import NodeJS from "../assets/icons/NodeJS.svg?react";
import ReactIcon from "../assets/icons/React.svg?react";
import Redux from "../assets/icons/Redux.svg?react";
import Tailwindcss from "../assets/icons/Tailwindcss.svg?react";
import TestingLibrary from "../assets/icons/testing-library.svg?react";
import TRPC from "../assets/icons/trpc.svg?react";
import TypeScript from "../assets/icons/TypeScript.svg?react";
import Vite from "../assets/icons/vite.svg?react";
import Vitest from "../assets/icons/vitest.svg?react";
import Vue from "../assets/icons/vuejs.svg?react";

import { Icon } from "./Icon";

const skillMap: Record<string, JSX.Element> = {
  TypeScript: <TypeScript />,
  "React.js": <ReactIcon />,
  Tailwindcss: <Tailwindcss />,
  "Node.js": <NodeJS />,
  NestJS: <NestJs />,
  "Material UI": <MaterialUi />,
  Docker: <Docker />,
  "Cloud build": <CloudBuild />,
  Git: <Git />,
  GitHub: <GitHub />,
  GitLab: <GitLab />,
  "Vue.js": <Vue />,
  Vite: <Vite />,
  Cypress: <Cypress />,
  Redux: <Redux />,
  "Next.js": <Next />,
  JavaScript: <JavaScript />,
  TRPC: <TRPC />,
  "testing-library": <TestingLibrary />,
  Jest: <Jest />,
  Vitest: <Vitest />,
};

export function Skill({ skill }: { skill: string }) {
  const icon = skillMap[skill] ?? "";

  return (
    <div className="flex items-center justify-center p-1 text-sm">
      {icon && <Icon icon={icon} />}
      {skill}
    </div>
  );
}
