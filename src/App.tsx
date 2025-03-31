import { Route, Routes } from "react-router";

import { CV } from "./CV";
import { type Data, mergeData } from "./data";

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<CV content={data.fr} />} />
      <Route path="/en" element={<CV content={data.en} />} />
    </Routes>
  );
}

export default App;
