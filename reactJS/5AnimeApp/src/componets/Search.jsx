export default function Search({ query, setQuery, placeholder, children }) {
  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children}
    </div>
  );
}
