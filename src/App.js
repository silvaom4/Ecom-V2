import './App.css';
import React, { useEffect } from 'react'
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from './components/Products';
import EcomData from './components/EcomData';
import ProductsData from './components/ProductsData';
import ProductsFilter from './components/ProductsFilter';

function App() {
    // useEffect(() => {
    //     fetch('http://localhost:7075/usersData')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    // }, [])


  return (
    <div className="App">

        <Router> 
            <div>
                <nav>
                    <ul>
                        {/* <li>
                            <Link to= "/">Home</Link>
                        </li> */}
                        {/* <li>
                            <Link to= "/about">About</Link>
                        </li> */}
                        {/* <li>
                            <Link to= "/contact">Contact </Link>
                        </li> */}
                        {/* <li>
                            <Link to="/products">Products</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/ecomdata">Data Test</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/productsdata">Product Data</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/productsfilter">Filtered Products</Link>
                        </li> */}
                    </ul>
                </nav>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products" element={<ProductsFilter />} />
                  <Route path="/ecomdata" element={<EcomData />} />
                  <Route path="/productsdata" element={<ProductsData />} />
                  {/* <Route path="/productsfilter" element={<ProductsFilter />}/> */}
                </Routes>
            </div>
        </Router>

     
    </div>
  );
}

export default App;
