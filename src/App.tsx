import { Route, Routes } from 'react-router-dom';

import { CV, Data } from './CV';

const data: { en: Data; fr: Data } = {
  en: JSON.parse(import.meta.env.VITE_DATA_EN),
  fr: JSON.parse(import.meta.env.VITE_DATA_FR),
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CV content={data.fr} />} />
      <Route path="/en" element={<CV content={data.en} />} />
    </Routes>
  );
}
