export default function AnimeDetail({ selectedAnime }) {
  return (
    <div className="details">
      <header>
        <img
          src={selectedAnime.images.jpg.image_url}
          alt={`${selectedAnime.title} cover`}
        />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>
          <p>
            {selectedAnime.year} &bull; {selectedAnime.score}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em>
        </p>
        {selectedAnime.trailer?.embed_url ? (
          <div className="trailer">
            <iframe
              title="Trailer"
              width="100%"
              height="200"
              src={selectedAnime.trailer.embed_url}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="no-trailer">Yah, trailernya nggak ada, Bre. 🍥</p>
        )}
      </section>
    </div>
  );
}
