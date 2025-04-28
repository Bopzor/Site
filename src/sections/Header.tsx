import QRCode from "../assets/icons/qrcode.svg?react";
import { Language } from "../components/Language";
import type { Data } from "../data";

export function Header({ content }: { content: Data }) {
  return (
    <section>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="row flex-wrap items-center print:justify-between">
            <div className="row items-center gap-4">
              <h1 className="text-5xl font-bold text-purple-800">
                {content.name}
              </h1>
              <Language content={content} />
            </div>
          </div>

          <h2 className="text-3xl font-bold">{content.job}</h2>
          <p className="text-xs">{content.description}</p>
        </div>

        <div className="ml-auto">
          <QRCode className="w-[100px] print:w-[80px] hidden md:block" />
        </div>
      </div>
    </section>
  );
}
