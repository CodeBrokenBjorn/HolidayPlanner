import React , {useState} from "react";
import imageWallpaper from "../../image/Subb.png";

import { Paper } from "@mui/material";
import "./HomeContent.css";

function HomeContent() {
    const [value, setValue] = useState();
    const placesContainer = [ 
        {
            name: "Paris",
            image: imageWallpaper,
        },
        {
            name: "Itally",
            image: imageWallpaper,
        },
        {
            name: "Japan",
            image: imageWallpaper,
        }
    ]

return(
   
        <Paper elevation={3}>

     
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

                    
                </div>
                <div className="first-content">
                    <div className="text-content">
                        <h2>
                            Amazing Holidays
                        </h2>
                        <p>Amazing Vacation can happen to anyone, if you wish to plan your 
                        great destination make sure you see our exlusive deals that often show
                         best prices and deals.</p>
                    </div>
                </div>
                <div className="image-container"> 
                    <img alt="im" src={imageWallpaper}/>

                 
                </div>
            </div>
            
            <div className="contentAboutRow">
                <h2>
                     Recomendead Places<span> to travel and explore

                     </span>
                </h2>
                <p>
                    it is long establiment far far far away
                </p>
                <button text="Book your holiday today" />
            </div>
            <div className="contentAboutRow">

            </div>
        </div>
        </Paper>
     
  );
}
export default HomeContent;
  