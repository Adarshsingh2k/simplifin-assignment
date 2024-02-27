import React from "react";

const ItemsPerPage = ({ itemsPerPage, setItemsPerPage }) => {
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  return (
    <select
      onChange={handleItemsPerPageChange}
      value={itemsPerPage}
      style={{ marginTop: "30px" }}
    >
      <option value="5">5 per page</option>
      <option value="10">10 per page</option>
      <option value="20">20 per page</option>
    </select>
  );
};

export default ItemsPerPage;
