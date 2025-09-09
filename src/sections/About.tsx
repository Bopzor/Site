import photo from "../assets/photo.png";
import type { Data } from "../data";

export function About({ content }: { content: Data }) {
  return (
    <>
      <div className="flex justify-center p-4">
        <img src={photo} className="size-[156px]" />
      </div>

      <div className="px-4 pt-2 bg-primary text-white text-sm">
        <div className="text-2xl">"</div>
        {content.about}
        <div className="text-2xl text-right">"</div>
      </div>
    </>
  );
}
