import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Font from "./Header/Font";
import ProductDataCSS from "../css/ProductsData.css";
import FilterCSS from "../css/Filter.css";

export default function ProductsFilter() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);// all possible data 

  useEffect(() => {
    fetch("http://localhost:7075/productsData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredItems(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // ../../public/Images/Gucci-1.webp

useEffect(() => {
    filterItems();
  }, [selectedFilters]);// filter items runs when selected filters state changes

  let filters = ["slides", "sandals", "bags", "winter"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = filteredItems.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  return (
    <div>
        <Font />
      <Header />
      <h2>Products</h2>

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
        {filteredItems.map((item, idx) => (
          <div key={`data-${idx}`} className="item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p className="category">{item.category}</p>
            <img className="filter-image"
                        src={require(`../../public/Images/${item.imgUrl}`)}
                        alt={item.name}
                      ></img>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <container>
        <form>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
          />
        </form>
        <table className="table-data">
          <thead>
            <th>ID</th>
            <th>Img</th>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {data
              .filter((d) => {
                return search.toLowerCase() === ""
                  ? d
                  : d.name.toLowerCase().includes(search);
              })
              .map((d, i) => (
                <div key={i}>
                  <tr>
                    <td>{d.id}</td>
                    <td>
                      <img
                        src={require(`../../public/Images/${d.imgUrl}`)}
                        alt={d.name}
                      ></img>
                    </td>
                    <td>{d.name}</td>
                    <td>${d.price}</td>
                  </tr>
                </div>
              ))}
          </tbody>
        </table>
      </container>
    </div>
  );
}
