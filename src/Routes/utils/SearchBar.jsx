import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar({ query, setQuery }) {
  return (
   <div className="SearchBar">
     <input
      type="text"
      placeholder="Search ..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      
    />

    <CiSearch style={{fontSize:"15px"}}/>
   </div>
  );
}

export default SearchBar;
