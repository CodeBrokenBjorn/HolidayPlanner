import React from "react";
import "../App.css";
import "./HomePage.css";
import bgFile from "../image/Subb.png";
import Container  from 'react-bootstrap/Container';

function HomePage() {
  return (
    <header style={{ paddingRight: 0 }}>
      <div className="p-7 text-center bg-image backgroundSize: cover">
        {/*HERO*/}
        <Container fluid>
          <img src={bgFile} alt="background" />
        </Container>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center h-100">
            <div className="p-2">
              <h1>Content</h1>
              <h1>button goes here</h1>
            </div>
          </div>
        </div>
        <h1>Background image goes here</h1>

        <div className="home-page">
          <h1> Adding Home Page example</h1>
        </div>
      </div>
    </header>
  );
}
export default HomePage;
