export default function Pagination({ page, totalPages, setPage }) {
  // Logic untuk nampilin 5 angka (misal: 1 2 [3] 4 5)
  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  // Koreksi startPage kalau udah deket akhir halaman
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* Tombol First & Prev */}
      <button onClick={() => setPage(1)} disabled={page === 1}>
        First
      </button>
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        &larr; Prev
      </button>

      {/* Deretan Angka (5 Button) */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={page === num ? "active" : ""}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}

      {/* Tombol Next & Last */}
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page === totalPages}
      >
        Next &rarr;
      </button>
      <button
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
      >
        Last
      </button>
    </div>
  );
}
