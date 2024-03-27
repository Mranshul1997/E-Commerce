import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './src/components/NavBar/NavBar';
import Home from './src/components/home/Home';
import Shop from './src/components/shop/Shop';
import About from './src/components/about/About';
import Category from './src/components/category/Category2';
import Trend from './src/components/trend/Trend';
import Best from './src/components/best/Best';
import Rated from './src/components/rated/Rated';

const Display = () => {
    const [orderPopup, setOrderPopup] = useState(false);
    const handleOrderPopup = () => {
      setOrderPopup(true);
    };
  
  return (
    <div>

      <BrowserRouter>
      <NavBar
            handleOrderPopup={handleOrderPopup}
            orderPopup={orderPopup}
            setOrderPopup={setOrderPopup}
          />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    handleOrderPopup={handleOrderPopup}
                    setOrderPopup={setOrderPopup}
                    orderPopup={orderPopup}
                  ></Home>
                }
              />
              <Route path="Shop" element={<Shop></Shop>} />
              <Route path="About" element={<About></About>} />
              <Route path="Category" element={<Category></Category>} />
              <Route path="Trend" element={<Trend></Trend>} />
              <Route path="Best" element={<Best></Best>} />
              <Route path="Rated" element={<Rated></Rated>} />
            </Routes>
          </BrowserRouter>

    </div>
  )
}

export default Display