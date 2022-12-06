import React from "react";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
import wallpaper1 from "../../image/wallpaper1.jpg";
import wallpaper2 from "../../image/wallpaper2.png";
import wallpaper3 from "../../image/wallpaper3.png";

function Hero() {
  // NO! STOP BREAKING STUFF
  //no , you
  return (
    <div>
      <div className="  p-7 text-center ">
        <Carousel>
          <Carousel.Item interval={6000}>
            <img className="d-block w-100" src={wallpaper1} alt="hero" />
            <Carousel.Caption>
              <h1>I am a hero</h1>
              <p>But I sometimes play in the sand</p>
              <Button
                variant="primary"
                onClick={() => console.log("user clicked")}
              >
                Click me
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img className="d-block" src={wallpaper2} alt="Bob" />
            <Carousel.Caption>
              <h1> I am new </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
