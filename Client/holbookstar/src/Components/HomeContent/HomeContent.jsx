import React , {useState} from "react";
import imageWallpaper from "../../image/Subb.png";

import { Paper } from "@mui/material";
import "./HomeContent.css";

function HomeContent() {
    const [value, setValue] = useState();

return(
        
        <Paper elevation={3}>

        <div className="content container">
        <div className="row-cover">
            <div className="row">
                <h1>
                    Stuff needs to add
                </h1>
                <label htmlFor="city">Search your destination:
                </label>
                <div className="input flex">
                    <input type ="text" placeholder="Enter your destination" />
                </div>
            </div>
            <div className="row">
                <label>Check Offers</label>
                <input type="date" value={value} />            
            </div>
                
            <div className="row">
            <label htmlFor="city">Search your destination:
                </label>
                <div className="input flex">
                    <input type ="dat" placeholder="Enter your destination" />
                </div> 
            </div>

        </div>

        </div>
        <div className="cotaninerAbout">
            <div className="contentAboutRow">
                <h1> Popular destination</h1>
                <p>The greate adventure that everyone wishes to start 
                allowing anyone plan and partakes in they great tour.
                Plan, start new adventures that may have greatest time
                you ever have.
                </p>
                <div className="first-content">
                    <div className="text-content">
                        <h2>
                            Great Values
                        </h2>
                        <p>The greate adventure that everyone wishes to start 
                    allowing anyone plan and partakes in they great tour.
                    Plan, start new adventures that may have greatest time
                    you ever have.</p>
                    </div>
                </div>
                <div className="image-container"> 
                    <img alt="im" src={imageWallpaper}/>

                    <img alt="Location of sea" src={imageWallpaper}/>
                </div>
                <div className="first-content">
                    <div className="text-content">
                        <h2>
                            Great Values
                        </h2>
                        <p>The greate adventure that everyone wishes to start 
                    allowing anyone plan and partakes in they great tour.
                    Plan, start new adventures that may have greatest time
                    you ever have.</p>
                    </div>
                </div>
                <div className="image-container"> 
                    <img alt="im" src={imageWallpaper}/>

                    <img alt="Location of sea" src={imageWallpaper}/>
                </div>
            </div>
            
            <div className="contentAboutRow">

            </div>
            <div className="contentAboutRow">

            </div>
        </div>
        </Paper>
  );
}
export default HomeContent;
  