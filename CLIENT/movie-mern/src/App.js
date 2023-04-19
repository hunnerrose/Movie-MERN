import { useState, useEffect } from "react";
import { MovieContext } from "./components/movieContext";
import SideBar from "./components/sideBar";
import Gallery from "./components/gallery";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const API_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=7b627fa55bf0652f8c45e9da6e8199d1';

  useEffect(() => {
    if (query !== '') {
      fetch(`${API_URL}&query=${query}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [query]);

  return (
    

    <MovieContext.Provider value={{ movies }}>
      
      <div>
        {/* SIDE BAR */}
      <SideNav
    onSelect={(selected) => {
       
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
              <NavText>

                {/* SEARCH BAR */}
                <SideBar query={query} setQuery={setQuery} />

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

        {/* GALLERY */}
        <Gallery />
      </div>
      </MovieContext.Provider>
  );
}

export default App;
