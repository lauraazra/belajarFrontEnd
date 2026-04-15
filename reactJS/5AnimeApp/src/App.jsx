import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimeList from "./pages/AnimeList";
import CharacterList from "./pages/CharacterList";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/CharacterList" element={<CharacterList />} />
      </Routes>
    </BrowserRouter>
  );
}
