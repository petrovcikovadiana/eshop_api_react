import React, { useContext } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
//import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <header className="bg-orange-100 fixed w-full z-10 transition-all">
      <div className="mx-10 p-3 flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <h2>ESHOP</h2>
          </div>
        </Link>
        {/* cart */}

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
