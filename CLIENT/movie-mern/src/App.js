import { useState, useEffect } from "react";
import Gallery from "./components/gallery";

function App() {
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=7b627fa55bf0652f8c45e9da6e8199d1&Title=%27`
    )
      .then((response) => response.json())
      .then((data) => setSearch(data.title))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Gallery search={search} />
    </div>
  );
}

export default App;
