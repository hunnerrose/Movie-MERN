import { useState, useEffect } from "react";
import { MovieContext } from "./components/movieContext";
import SideBar from "./components/sideBar";
import Gallery from "./components/gallery";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7b627fa55bf0652f8c45e9da6e8199d1&query=${query}`
      )
        .then((response) => {
          // console.log(response);
          return response.json();
        })

        .then((data) => {
          setMovies(data.results);
          //   console.log(data);
        });
    }
  }, [query]);

  //   <MovieContext.Provider value={{ movies }}>
  //     <div className="appContainer">
  //       <SideBar query={query} setQuery={setQuery} />
  //       <Gallery />
  //     </div>
  // </MovieContext.Provider>
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <MovieContext.Provider value={{ movies }}>
  <div>
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
      
      
      <input
        className="input"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
          </NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
                Movies
            </NavText>
            <NavItem eventKey="charts/recentlyAdded">
                <NavText>
                    Recently Added
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/upcoming">
                <NavText>
                    Popular Movies
                </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
      <Gallery />
      </div>
      </MovieContext.Provider>
  );
}

export default App;
