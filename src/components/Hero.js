import React, { useEffect } from "react";
// import "../components/Carousel"; // Import the JavaScript file
import Img1 from "../img/hair.png";
import Img2 from "../img/girl.png";
import Img3 from "../img/fashion.png";

//import link
//import { Link } from "react-router-dom";

// carousel start
window.addEventListener("load", () => {
  autoSlide();
});

function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 7000); // slide speed = 5s
}

function slide(toIndex) {
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item__active");

  // check if toIndex exceeds the number of carousel items
  if (toIndex >= itemsArray.length) {
    toIndex = 0;
  }

  const newItemActive = itemsArray[toIndex];

  // start transition
  newItemActive.classList.add("carousel_item__pos_next");
  setTimeout(() => {
    newItemActive.classList.add("carousel_item__next");
    itemActive.classList.add("carousel_item__next");
  }, 400);

  // remove all transition class and switch active class
  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
    },
    {
      once: true,
    }
  );
}

function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item__active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemActiveIndex;
}

const Hero = () => {
  useEffect(() => {
    autoSlide();
  }, []);
  // carousel end
  return (
    <section id="hero">
      <div class="carousel">
        <div class="carousel_inner">
          <div class="carousel_item carousel_item__active">
            <img src={Img1} alt="" class="carousel_img" />
          </div>
          <div class="carousel_caption">
            <p class="carousel_subtitle"></p>
            <p class="carousel_title"></p>
            {/* <hr class="carousel_hr"> */}
            <p class="carousel_history"></p>
          </div>
          <div class="carousel_item ">
            <img
              // className="w-full h-[500px]"
              src={Img2}
              alt=""
              class="carousel_img"
            />
          </div>
          <div class="carousel_caption">
            <p class="carousel_subtitle"></p>
            <p class="carousel_title"></p>
            {/* <hr class="carousel_hr"> */}
            <p class="carousel_history"></p>
          </div>
          <div class="carousel_item ">
            <img
              // className="w-full h-[500px]"
              src={Img3}
              alt=""
              class="carousel_img"
            />
          </div>
          <div class="carousel_caption">
            <p class="carousel_subtitle"></p>
            <p class="carousel_title"></p>
            {/* <hr class="carousel_hr"> */}
            <p class="carousel_history"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
