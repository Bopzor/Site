import { Route, Routes } from "react-router";

import { ContactPage } from "./ContactPage";
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
    <div
      className={[
        "md:max-w-[1080px] md:min-w-[900px] md:m-[1cm_auto] md:bg-white md:shadow-2xl",
        "print:h-[29.7cm] print:w-[21cm] print:m-0 print:p-[0.5cm] print:border-initial print:rounded-none print:min-w-initial print:min-h-initial print:shadow-none print:bg-initial print:[page-break-after:always] print:bg-white",
      ].join(" ")}
    >
      <Routes>
        <Route path="/" element={<CV content={data.fr} />} />
        <Route path="/en" element={<CV content={data.en} />} />
        <Route path="/contact" element={<ContactPage content={data.en} />} />
      </Routes>
    </div>
  );
}

export default App;
