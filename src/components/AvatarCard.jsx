import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import settings from "../Utils/carouselSettings";


function AvatarCard() {
    return (
      <div>
        <h3>Browse Categories</h3>
        <Slider {...settings}>
          <div>
            <h4>1</h4>
          </div>
          <div>
            <h4>2</h4>
          </div>
          <div>
            <h4>3</h4>
          </div>
          <div>
            <h4>4</h4>
          </div>
        </Slider>
      </div>
    )
}  

export default AvatarCard