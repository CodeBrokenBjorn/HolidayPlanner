import React, {useState, useEffect} from "react";
import "./Searchbar.css";
import { Button } from "react-bootstrap";
import { filterItem } from "../../action/filterSearch";

function Searchbar() {
    const[locationQuery, setLocationQuery] = useState([]);
    const[id , setId] = useState("");
    const[destination, setDestination] = useState("");
    const[date, setDate] = useState("");
    const[amount, setAmount] = useState(0);

//  formatDefault = filterItem(DATAinput)



    return(
        <div className="Searchbar">
              <div className="row-cover">
            <div className="row">
                <h1>
                    Plan your Holiday today!!
                </h1>
                <label htmlFor="city">Search your destination:
                </label>
                <div className="input flex">
                    <input type ="text" placeholder="Enter your destination"value={"Stuff"} />
                </div>
            </div>
            <div className="row">
                <label>Check Offers</label>
                <input type="date" value={"stuff"} />            
            </div>
                
            <div className="row">
            <label htmlFor="city">Search your destination:
                </label>
                <div className="input flex">
                    <input type ="price" placeholder="How much money you planning to take" value={"stuff"} />
                </div> 
            </div>
            <div className="button-row"> 
                <div className="button-container">
                    <Button variant="contained" onClick={"stuff"}>
                        Submit
                    </Button>
                </div>
            </div>

        </div>






        </div>
    );
}
export default Searchbar;