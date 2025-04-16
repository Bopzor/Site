import { Data } from "./data";
import { Contact } from "./sections/Contact";

export function ContactPage({ content }: { content: Data }) {
  return (
    <div className="p-10 row justify-center">
      <Contact content={content} />
    </div>
  );
}
