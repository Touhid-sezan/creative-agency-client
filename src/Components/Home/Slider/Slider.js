import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

function Slider() {
  return (
    <div className=" slide-section">
        <h2 style={{color: 'white'}}>Here are some of <span>our works</span></h2>
        <div className="slider">
        <Carousel breakPoints={breakPoints}>
            <Item className="item"><img src={carousel1} alt=""/></Item>
            <Item className="item"><img src={carousel2} alt=""/></Item>
            <Item className="item"><img src={carousel3} alt=""/></Item>
            <Item className="item"><img src={carousel4} alt=""/></Item>
            <Item className="item"><img src={carousel5} alt=""/></Item>
        </Carousel>
    </div>
    </div>
  );
}
export default Slider;