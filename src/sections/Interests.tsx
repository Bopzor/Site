import { SectionTitle } from "../components/SectionTitle";
import type { Data } from "../data";

export function Interests({ content }: { content: Data }) {
  return (
    <section>
      <SectionTitle title={content.interestsTitle} />

      <div className="col md:row justify-between gap-2 text-sm">
        {content.interests.map(({ title, activities }) => (
          <InterestColumn title={title} key={title}>
            {activities.map((activity) => {
              return <p key={activity}>{activity}</p>;
            })}
          </InterestColumn>
        ))}
      </div>
    </section>
  );
}

function InterestColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="col flex-1">
      <p className="md:text-center font-semibold">{title}</p>
      {children}
    </div>
  );
}
