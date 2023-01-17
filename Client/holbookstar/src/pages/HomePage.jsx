import React from "react";
import "../App.css";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Hero from "../Components/Hero";
import HomeContent from "../Components/HomeContent/HomeContent";

function HomePage() {
  return (
    <header style={{ paddingRight: 0 }}>
      <div className="p-7 text-center bg-image backgroundSize: cover">
        <div className="background">
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
