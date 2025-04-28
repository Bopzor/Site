import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { type Data, mergeData } from "../data";

const data: { en: Data; fr: Data } = {
  en: mergeData(
    JSON.parse(import.meta.env.VITE_DATA_COMMON),
    JSON.parse(import.meta.env.VITE_DATA_EN)
  ),
  fr: mergeData(
    JSON.parse(import.meta.env.VITE_DATA_COMMON),
    JSON.parse(import.meta.env.VITE_DATA_FR)
  ),
};

const AppContext = createContext<Data>(data.fr);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }: React.PropsWithChildren) {
  const [content, setContent] = useState<Data>(data.fr);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("language") === "en") {
      setContent(data.en);
    } else {
      setContent(data.fr);
    }
  }, [searchParams]);

  return <AppContext.Provider value={content}>{children}</AppContext.Provider>;
}
