import { createContext, useContext, useState } from "react";

const CVContext = createContext<{
  hoveredSkill: string | null;
  setHoveredSkill: (hoveredSkill: string | null) => void;
}>(null as never);

export const useCVContext = () => useContext(CVContext);

export function CVContextProvider({ children }: React.PropsWithChildren) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <CVContext.Provider value={{ hoveredSkill, setHoveredSkill }}>
      {children}
    </CVContext.Provider>
  );
}
