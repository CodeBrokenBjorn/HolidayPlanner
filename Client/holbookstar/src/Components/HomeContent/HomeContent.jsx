import React  from "react";
import imageWallpaper from "../../image/Subb.png";
import bimageWallpaper2 from "../../image/bimageWallpaper2.png";
import { Paper } from "@mui/material";
import "./HomeContent.css";

function HomeContent() {
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
                            Memorable Events
                        </h2>
                        <p>Embark on the journey of a lifetime with the Great Adventure Tour. 
                        Experience new cultures, landscapes, and activities as you
                         explore some of the world's most breathtaking destinations. 
                         Whether you're an adrenaline seeker or a nature lover, our tour
                          has something for everyone. So pack your bags, gather your friends 
                          and family, and join us on the adventure of a lifetime. The memories 
                          you create will last a lifetime.</p>
                    </div>
                </div>
                <div className="image-container"> 
                    <img alt="im" src={bimageWallpaper2}/>

                    
                </div>
                <div className="first-content">
                    <div className="text-content">
                        <h2>
                            Amazing Holidays
                        </h2>
                        <p>"The memories we make during our holidays are truly priceless. It's not just about the destination, it's about the journey and the planning that goes into creating the perfect trip. Take the time to plan and make it your own. Whether it's a family vacation or a solo trip, make sure to include activities that align with your interests and passions. Cherish the moments spent exploring new places, trying new foods, and making connections with the people and cultures around you.
</p>
<p>Don't be afraid to step out of your comfort zone and try something new. The moments of uncertainty and adventure are often the ones we remember the most. And most importantly, don't forget to take time to relax and unwind. Your holiday is a chance to recharge, so make sure to schedule in some well-deserved rest and relaxation.
</p>
<p>So, start planning, start saving and make your holiday a memorable one, filled with amazing experiences and cherished memories that will last a lifetime.</p>
                    </div>
                </div>
                <div className="image-container"> 
                    <img alt="im" src={imageWallpaper}/>

                 
                </div>
            </div>
            
        </div>
        </Paper>
     
  );
}
export default HomeContent;
  