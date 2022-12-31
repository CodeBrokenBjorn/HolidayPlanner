import React from "react";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
import imageWallpaper from "../../image/imageWallpaper.png";
import imageWallpaper2 from "../../image/imageWallpaper2.png";
import wallpaper1 from "../../image/wallpaper1.jpg";
import wallpaper2 from "../../image/wallpaper2.png";
import wallpaper3 from "../../image/wallpaper3.png";
import "./Hero.css";
function Hero() {
  // NO! STOP BREAKING STUFF
  //no , you
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
                    With unique experiance that you will remeber for rest of
                    your life!
                  </p>
                  {/* <Button
                variant="primary"
                onClick={() => console.log("user clicked")}
              >
                
              </Button> */}
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
                <h1>Be always prepared</h1>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
