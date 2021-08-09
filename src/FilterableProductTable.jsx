import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText);
  };

  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  };

  return (
    <div className="main">
      <div className="title">
        <h1>Searchable DataTable</h1>
      </div>
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockChange={handleInStockChange}
        />
        <ProductTable
          products={props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </div>
  );
};

export default FilterableProductTable;
