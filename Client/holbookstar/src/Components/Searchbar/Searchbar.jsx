import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Searchbar.css";

function Searchbar() {
    const url = "https://localhost:8900/";
    const [name, setName] = useState([]);
    const [value, setValue] = useState();
    const Searchbar = () => {
        return axios.get()
            

    }
    return(
        <div className="Searchbar">
              <div className="row-cover">
            <div className="row">
                <h1>
                    Please Select The changes
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
    );
}
export default Searchbar;