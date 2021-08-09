import React from "react";

const SearchBar = (props) => {
  const handleFilterTextChange = (e) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked);
  };

  return (
    <form>
      <div className="wrap-input">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
        <span className="focus-input"></span>
      </div>

      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
