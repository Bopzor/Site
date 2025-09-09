import { Language } from "./components/Language";
import { useAppContext } from "./contexts/AppContext";
import { Contact } from "./sections/Contact";

import photo from "./assets/photo.png";
import { CompanyCustomization } from "./components/CompanyCustomization";

export function ContactPage() {
  const content = useAppContext();

  return (
    <div className="p-10 col justify-center items-center relative">
      <CompanyCustomization content={content} />

      <div className="relative">
        <div className="flex justify-center p-4">
          <img src={photo} className="size-[156px]" />
        </div>

        <div className="absolute left-full bottom-1/3">
          <Language content={content} />
        </div>
      </div>

      <h1 className="text-5xl font-bold text-primary text-center mr-2">
        {content.name}
      </h1>

      <h2 className="text-3xl font-bold text-center text-accent">
        {content.job}
      </h2>

      <div className="mt-6 row justify-center">
        <Contact content={content} />
      </div>
    </div>
  );
}
