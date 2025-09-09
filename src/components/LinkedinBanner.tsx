import Chevron from "../assets/icons/chevron-right.svg?react";
import Image from "../assets/icons/undraw_remote-worker.svg?react";

export function LinkedinBanner() {
  return (
    <div className="relative aspect-[calc(1584/396)] bg-linear-to-r from-accent/15 to-accent/5 pr-8 py-6">
      <div className="flex">
        <div className="bg-accent h-fit mt-6 px-4 py-1 rounded-br-lg rounded-tr-lg text-white">
          full-remote
        </div>

        <div className="flex flex-col items-end flex-1">
          <Punchline />
        </div>
      </div>

      <div className="absolute bottom-0 left-90">
        <Image className="w-60 h-40" />
      </div>
    </div>
  );
}

function Punchline() {
  return (
    <div className="flex flex-col items-end">
      <div className="text-center">
        <h1 className="text-5xl uppercase">
          Développeuse <strong>full-stack</strong> orientée
        </h1>
        <div className="row items-center gap-2">
          <div className="h-0.5 flex-1 bg-accent" />
          <div className="text-wrap text-center">
            <h2 className="my-2 font-bold text-primary text-5xl uppercase">
              <strong>produit</strong>
            </h2>
          </div>
          <div className="h-0.5 flex-1 bg-accent" />
        </div>
      </div>

      <div className="mt-1">
        <SubText />
      </div>
    </div>
  );
}

function SubText() {
  return (
    <div className="text-3xl w-fit">
      Penser <strong>valeur</strong>, coder <strong>durable</strong>
      <Stack />
    </div>
  );
}

function Stack() {
  return (
    <div className="text-xl flex items-center gap-6 bg-primary text-white py-2 pl-4 pr-6">
      <Chevron className="size-7 fill-white" />

      <div className="flex justify-between flex-1">
        {["TypeScript", "Node.js", "React"].map((stack) => (
          <div key={stack}>{stack}</div>
        ))}
      </div>
    </div>
  );
}
