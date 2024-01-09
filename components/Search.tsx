"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Search() {
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`);
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
          className="form-control mr-sm-2 rounded text-white font-thin pl-2 border border-solid border-gray-600"
          type="search"
          placeholder="search"
          aria-label="search"
          style={{height: "30px", color:"white"}}
          autoComplete="off"
          id="search-input"
        />
        <button className="search-button" type="submit" id="search-submit-button">
            <span role="button" aria-label="emoji" className="text-2xl">
                🔎
            </span>
        </button>
      </form>
    </nav>
  );
}