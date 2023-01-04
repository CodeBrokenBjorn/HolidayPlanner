import React, { useState } from "react";
import "../App.css";
import "./HomePage.css";
import backGroundWeb from "../image/wallpaper1.jpg";
import { Paper } from "@mui/material";
import bgFile from "../image/Subb.png";
import Container from "react-bootstrap/Container";
import Hero from "../Components/Hero";
import { Card } from "react-bootstrap";
import HomeContent from "../Components/HomeContent/HomeContent";

function HomePage() {
  // const dataText = [
  //   {
  //     //add image text and soo on...
  //     https://www.youtube.com/watch?v=1TVacFL7Oo0

  //   }
  // ]

  
  return (
    <header style={{ paddingRight: 0 }}>
      <div className="p-7 text-center bg-image backgroundSize: cover">
        <div className="background">
          {/* <img src={backGroundWeb} alt="backgroundimage" /> */}
          {/*HERO*/}
          <Container fluid>
            <Hero />
          </Container>
          
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
                 <HomeContent />
          </div>
        </div>
      </div>
    </header>
  );
}
export default HomePage;
