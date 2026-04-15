import { useState, useEffect } from "react";

export default function useAnimeData(endpoint, onAnimeList) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  function handleSearch(newQuery) {
    setQuery(newQuery);
    setPage(1);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const url =
          query.length > 2
            ? `https://api.jikan.moe/v4/${endpoint}?q=${query}&page=${page}`
            : `https://api.jikan.moe/v4/top/${endpoint}?page=${page}`;

        const res = await fetch(url);
        const result = await res.json();

        if (!res.ok) throw new Error("Gagal ambil data");

        setData(result.data || []);
        setTotalPages(result.pagination?.last_visible_page || 1);
        setTotalResults(result.pagination?.items?.total || 0);

        if (result.data?.length > 0 && onAnimeList) {
          onAnimeList(result.data[0]);
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    fetchData();
  }, [endpoint, query, page, onAnimeList]);

  return {
    query,
    setQuery: handleSearch,
    page,
    setPage,
    data,
    totalPages,
    totalResults,
  };
}
