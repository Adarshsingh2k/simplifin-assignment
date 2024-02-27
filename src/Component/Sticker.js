import React, { useState } from "react";
import useFetchData from "../CustomHook/useFetchData";
import ImageGrid from "./ImageGrid/ImageGrid";
import ItemsPerPage from "./ItemsPerPage";

const Sticker = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data, isLoading, error, currentPage, setCurrentPage, totalPages } =
    useFetchData(
      `https://api.giphy.com/v1/stickers/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`,
      itemsPerPage
    );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Sticker</h1>
      <ImageGrid images={data} />
      <ItemsPerPage
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Sticker;
