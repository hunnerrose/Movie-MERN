import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import SearchBar from "./SearchBar";
import "../index.css";
import { InputText } from "primereact/inputtext";

export default function SideBar({ query, setQuery }) {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  return (
    <div>
      <Sidebar
        visible={visibleCustomToolbar}
        onHide={() => setVisibleCustomToolbar(false)}
        style={{
          backgroundColor: "#243b55",
        }}
      >
        <h3 className="mb-3">SHMOVIE FANATICS</h3>
        <SearchBar query={query} setQuery={setQuery} />
        <h3 className="mb-4 text-white">SHMOVIE FANATICS</h3>
        <span className="p-float-label p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            id="lefticon"
            value={query}
            setQuery={setQuery}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: "17.2rem" }}
          />
          <label htmlFor="lefticon">Search for a movie</label>
        </span>
        <Button className="mt-3" style={{ width: "17.2rem" }}>
          Popular Movies
        </Button>
        <Button className="mt-3" style={{ width: "17.2rem" }}>
          Now Playing
        </Button>
        <Button className="mt-3" style={{ width: "17.2rem" }}>
          Upcoming
        </Button>
        <Button className="mt-3" style={{ width: "17.2rem" }}>
          Top Rated
        </Button>
      </Sidebar>
      <Button
        icon="pi pi-chevron-right"
        onClick={() => setVisibleCustomToolbar(true)}
        className="m-3 p-button-text"
      />
    </div>
  );
}
