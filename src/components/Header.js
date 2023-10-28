import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const [categoryData, setCategoryData] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    fetchDataAndDisplay();
  }, []);

  const fetchDataAndDisplay = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategoryData(json);
        setShowCategories(true);
      });
  };

  const renderCategories = () => {
    if (showCategories && categoryData) {
      return (
        <ul className="flex flex-col md:flex-row space-x-10 capitalize">
          {categoryData.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu); // Toggle mobile menu visibility
  };

  return (
    <header className="bg-orange-100 fixed w-full z-10 transition-all">
      <div className="mx-10 p-3 flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <h2>ESHOP</h2>
          </div>
        </Link>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <div className="hamburger-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {showMobileMenu && (
            <div className="mobile-menu-categories bg-orange-100">
              {renderCategories()}
            </div>
          )}
        </div>
        <div className="desktop-menu">
          <ul id="dataDisplay">{renderCategories()}</ul>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-auto items-center justify-center "></div>
    </header>
  );
};

export default Header;
