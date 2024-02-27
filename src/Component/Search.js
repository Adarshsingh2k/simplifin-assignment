import React, { useCallback, useEffect, useState } from "react";
import useFetchData from "../CustomHook/useFetchData";
import ImageGrid from "./ImageGrid/ImageGrid";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const { data, isLoading, error } = useFetchData(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${debouncedQuery}`,
    10
  );

  const debouncedSetQuery = useCallback(
    debounce((value) => {
      setDebouncedQuery(value);
    }, 2000),
    []
  );

  useEffect(() => {
    debouncedSetQuery(query);
  }, [query, debouncedSetQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search GIFs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "300px" }}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <ImageGrid images={data} search={true} />
      </div>
    </div>
  );
};

export default Search;
