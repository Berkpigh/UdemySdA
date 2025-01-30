import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from './features/characters/pages/PageListCharacters';
import { PageListGame } from "./features/games/pages/PageListGame";
import { PageNoMatch } from './pages/PageNoMatch'
import { PageHome } from "./pages/PageHome";
import { Login } from "./features/authentication/components/Login";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/" element={<PageHome></PageHome>} />
      <Route path="/characters" element={<PageListCharacters></PageListCharacters>} />
      <Route path="/games" element={<PageListGame></PageListGame>} />
      <Route path="*" element={<PageNoMatch />} />
    </Routes>
  );
};
