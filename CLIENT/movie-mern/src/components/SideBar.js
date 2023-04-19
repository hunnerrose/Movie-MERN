import "../index.css";

export default function SideBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <label className="sidebar">
      Search for a movie:
      <input
        className="input"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
    </label>
  );
}
