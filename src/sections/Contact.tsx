import React, { JSX } from "react";

import GitHub from "../assets/icons/github.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Mail from "../assets/icons/mail.svg?react";
import Website from "../assets/icons/website.svg?react";
import { Icon } from "../components/Icon";
import type { Data } from "../data";

export function Contact({ content }: { content: Data }) {
  return (
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
  );
}

function WithRightIcon({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: JSX.Element;
}) {
  return (
    <span className="row items-center p-1">
      <Icon icon={icon} />
      {children}
    </span>
  );
}
