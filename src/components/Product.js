import React, { useContext, useState } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
//import cart context
import { CartContext } from "../contexts/CartContext";
import Modal from "../components/Modal"; // Import the Modal component

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //destructure product
  const { id, image, category, title, price, description } = product;
  return (
    <div>
      <div className="border border-[#E4E4E4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div>
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                onClick={openModal}
                className="max-h-[160px] cursor-pointer group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* category & price */}
      <div>
        <div className="text-sm capitalize text-slate-700 mb-1">{category}</div>{" "}
        <h2 onClick={openModal} className=" font-semibold mb-1 cursor-pointer">
          {title}
        </h2>
        <p className=" font-semibold text-slate-500 "> $ {price}</p>
      </div>
      {/* buttons */}
      <div className="flex flex-row gap-x-5 justify-center items-center">
        <button
          onClick={() => addToCart(product, id)}
          className="bg-orange-300 p-2"
        >
          <div>
            {" "}
            <BsPlus />{" "}
          </div>
        </button>
        <button onClick={openModal} className=" p-2">
          <div>
            {" "}
            <BsEyeFill />{" "}
          </div>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-row space-x-12 ">
          <img
            className="w-96 max-h-[300px] group-hover:scale-110 transition duration-300"
            src={image}
            alt=""
          />

          <div className="">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="text-xl text-orange-500 font-medium mb-6">
              $ {price}
            </div>

            <p className="mb-6">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
            <button
              onClick={closeModal}
              className="modal-close-button absolute top-2 right-2"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
