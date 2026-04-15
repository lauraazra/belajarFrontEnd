import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import NavBar from "../componets/NavBar";
import Search from "../componets/Search";
import NumResult from "../componets/NumResult";
import Pagination from "../componets/Pagination";
import Main from "../componets/Main";
import Box from "../componets/Box";
import BoxList from "../componets/BoxList";
import Anime from "../componets/Anime";
import AnimeDetail from "../componets/AnimeDetail";

export default function AnimeList() {
  const [selectedAnime, setSelectedAnime] = useState(null);

  const {
    query,
    setQuery,
    page,
    setPage,
    data: animes,
    totalPages,
    totalResults,
  } = useFetchData("anime", setSelectedAnime);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <NavBar />
      <Search query={query} setQuery={setQuery} placeholder={`Cari Anime...`}>
        <NumResult total={totalResults} />
      </Search>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <Main>
        <Box>
          <BoxList>
            {animes.map((anime) => (
              <Anime
                anime={anime}
                onSelectedAnime={handleSelectedAnime}
                key={anime.mal_id}
              />
            ))}
          </BoxList>
        </Box>
        <Box>
          {selectedAnime && <AnimeDetail selectedAnime={selectedAnime} />}
        </Box>
      </Main>
    </>
  );
}
