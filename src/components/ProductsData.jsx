import React, { useEffect, useState } from "react";
import Header from './Header/Header'
import Font from './Header/Font'
import Footer from './Footer/Footer'
import ProductDataCSS from '../css/ProductsData.css'


export default function ProductsData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7075/productsData")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });
  // ../../public/Images/Gucci-1.webp

    const [search, setSearch] = useState('');
    // console.log(search);
  return (
    <div>
        <Font />
        <Header />
      <h1>Products</h1>

      <container>
        <form>
          <input type="search" onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here" />
        </form>
        <table className="table-data">
                <thead>
                <th>ID</th>
                <th>Img</th>
                <th>Name</th>
                <th>Price</th>
                </thead>
                <tbody>
                {data.filter((d) => {
                    return search.toLowerCase() === '' ? d : d.name.toLowerCase().includes(search)
                }).map((d, i) => (
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

      <Footer />
    </div>
  );
}
