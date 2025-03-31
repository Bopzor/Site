import { JSX } from 'react';

export function Icon({ icon }: { icon: JSX.Element }) {
  return <span className="mx-1 inline-block size-4 grayscale">{icon}</span>;
}
