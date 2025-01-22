import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from './features/characters/pages/PageListCharacters';
import { PageNoMatch } from './pages/PageNoMatch'
import { PageHome } from "./pages/PageHome";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome></PageHome>} />
      <Route path="/characters" element={<PageListCharacters></PageListCharacters>} />
      <Route path="*" element={<PageNoMatch />} />
    </Routes>
  );
};
