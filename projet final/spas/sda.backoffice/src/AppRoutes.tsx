import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from './features/characters/pages/PageListCharacters';
import { PageListGame } from "./features/games/pages/PageListGame";
import { PageNoMatch } from './pages/PageNoMatch'
import { PageHome } from "./pages/PageHome";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome></PageHome>} />
      <Route path="/characters" element={<PageListCharacters></PageListCharacters>} />
      <Route path="/games" element={<PageListGame></PageListGame>} />
      <Route path="*" element={<PageNoMatch />} />
    </Routes>
  );
};
