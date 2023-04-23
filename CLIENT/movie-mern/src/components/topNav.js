import React from "react";
import { InputText } from "primereact/inputtext";

export default function TopNav({ query, setQuery }) {
  return (
    <header id="header" className="mb-2 mx-5">
      <div className="d-flex align-items-center justify-content-between">
        <a href="/">
          <img
            className="logo"
            src="https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230423T002509Z&X-Amz-Expires=81094&X-Amz-Signature=7a0a4b95a805032e8a55cc0b67ecbcba684caf10e6fadd328cdda82dd1b0e100&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2023%20Apr%202023%2022%3A56%3A43%20GMT"
            alt="logo"
          />
        </a>
        <span className="p-float-label p-input-icon-left mb-3">
          <i className="pi pi-search" />
          <InputText
            id="lefticon"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label htmlFor="lefticon">Search for a movie</label>
        </span>
      </div>
    </header>
  );
}
