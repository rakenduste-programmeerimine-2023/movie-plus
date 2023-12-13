"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Search() {
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="navbar">
      <form
        className="d-flex"
        onSubmit={handleSubmit}
        role="search"
        style={{ maxWidth: "800px" }}
      >
        <input
          onChange={handleChange}
          value={searchText}
          className="form-control mr-sm-2 rounded text-black pl-2 border border-solid border-gray-600"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{height: "30px"}}
          autoComplete="off"
          id="search-input"
        />
        <button className="search-button" type="submit" id="search-submit-button">
          <span role="button" aria-label="emoji">
          🔍︎
          </span>
        </button>
      </form>
    </nav>
  );
}
