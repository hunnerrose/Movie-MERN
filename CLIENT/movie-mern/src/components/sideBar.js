import "../index.css";

export default function SideBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <label>
      Search
      <input
        className="input"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
    </label>
  );
}
