import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import SearchBar from "./SearchBar";
import "../index.css";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";

export default function SideBar({ query, setQuery }) {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  return (
    <div>
      <Sidebar
        visible={visibleCustomToolbar}
        onHide={() => setVisibleCustomToolbar(false)}
      >
        <h3 className="mb-3">SHMOVIE FANATICS</h3>
        <SearchBar query={query} setQuery={setQuery} />
      </Sidebar>
      <Button
        icon="pi pi-chevron-right"
        onClick={() => setVisibleCustomToolbar(true)}
        className="m-3 p-button-text"
      />
    </div>
  );
}
