import React, { useState } from "react";
import styled from "styled-components";
import SearchButton from "../buttons/SearchButton";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <SearcBar onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton type="submit" onClick={handleSearch} />
    </SearcBar>
  );
};

const SearcBar = styled.form`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  border: 4px solid #2e2e2e;
  border-radius: 5px;

  display: flex;
  input {
    height: 30px;
    border: none;
    outline: none;
    width: max-content;
    box-sizing: border-box;
    background-color: white;
  }

  :focus-within {
    box-shadow: 2px 2px 5px #313131;
  }
`;

export default SearchBar;
