import { useState, useRef } from "react";
import useFetchData from "../hooks/useFetchData";
import NavBar from "../componets/NavBar";
import Search from "../componets/Search";
import NumResult from "../componets/NumResult";
import Pagination from "../componets/Pagination";
import Main from "../componets/Main";

export default function Character() {
  const {
    query,
    setQuery,
    page,
    setPage,
    data: characters,
    totalPages,
    totalResults,
  } = useFetchData("characters");
  return (
    <>
      <NavBar />
      <Search
        query={query}
        setQuery={setQuery}
        placeholder={`Cari Characters...`}
      >
        <NumResult total={totalResults} />
      </Search>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <Main>
        <CardLayout>
          {characters.map((character) => (
            <CardBox item={character} key={character.mal_id} />
          ))}
        </CardLayout>
      </Main>
    </>
  );
}

function CardLayout({ children }) {
  return <div className="cardLayout">{children}</div>;
}

function CardBox({ item }) {
  const [isActive, setIsActive] = useState(false);
  const aboutRef = useRef(null);

  const handleToggle = () => {
    // Kalau sekarang lagi kebuka (active) dan mau ditutup
    if (isActive && aboutRef.current) {
      // Paksa balik ke atas sebelum/pas nutup
      aboutRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsActive(!isActive);
  };

  return (
    <div className="cardBox">
      <img src={item.images.jpg.image_url} alt={`${item.title} cover`} />

      <div className="card-info">
        <h3>{item.name}</h3>
        <div className="extra-info">
          <p className="kanji">{item.name_kanji}</p>

          {/* Bungkus about di dalam container scrollable */}
          {!item.about ? (
            <p>No Description</p>
          ) : (
            <>
              <div
                ref={aboutRef}
                className={`about-container ${isActive ? "active" : ""}`}
              >
                <p className="about">{item.about}</p>
              </div>

              <button className="btn-more" onClick={handleToggle}>
                {isActive ? "Show Less ▴" : `More Details ▾`}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
