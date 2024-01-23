import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Font from "./Header/Font";
import Footer from "./Footer/Footer";
import ProductDataCSS from "../css/ProductsData.css";
import FilterCSS from "../css/Filter.css";

export default function ProductsFilter() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); // all possible data

  useEffect(() => {
    fetch("http://localhost:7075/productsData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

  let filters = ["slides", "sandals", "bags", "winter"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]); // filter items runs when selected filters state changes

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = data.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  const handleSearchClick = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    let filteredData = [...data];

    if (searchValue !== "") {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  };

  return (
    <div>
      <Font />
      <Header />
      <h2>Products</h2>
      <container>
        <form>
          <input
            type="search"
            value={search}
            onChange={handleSearchClick}
            placeholder="Search here"
          />
        </form>
      </container>

      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, idx) => (
            <div key={`data-${idx}`} className="item">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p className="category">{item.category}</p>
              <img
                className="filter-image"
                src={require(`../../public/Images/${item.imgUrl}`)}
                alt={item.name}
              ></img>
              <p>{item.description}</p>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}
