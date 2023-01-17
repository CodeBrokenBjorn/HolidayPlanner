import React from "react";
import { Carousel } from "react-bootstrap";
import imageWallpaper from "../../image/imageWallpaper.png";
import imageWallpaper2 from "../../image/imageWallpaper2.png";
import "./Hero.css";
function Hero() {
  // NO! STOP BREAKING STUFF
  //no , you I am just trying fix this me :(
  return (
    <div>
      <div className="  p-7 text-center ">
        <Carousel>
          
            <Carousel.Item interval={8000}>
              <img
                className="contentHero w-100 d-block"
                src={imageWallpaper}
                alt="hero"
              />
              <div className="Carousel d-flex">

                <Carousel.Caption className="Carousel-Item ">
                  <h1>Discover Your Story</h1>
                  <p>
                  Journey to the Unforgettable: Your Ultimate Guide to Planning the Perfect Trip
                  </p>
          
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
              <img
                className="contentHero w-100 d-block"
                src={imageWallpaper2}
                alt="Bob"
              />
              <Carousel.Caption>
                <h1>Suprise everyone</h1>
                <p>
                Unleash the Adventure: The Ultimate Guide to Planning Your Next Vacation
                </p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
