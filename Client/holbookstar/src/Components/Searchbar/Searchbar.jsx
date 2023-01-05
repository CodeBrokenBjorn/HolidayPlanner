import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Searchbar.css";
import { Button } from "react-bootstrap";
import { filterItem } from "../../action/filterSearch";

function Searchbar() {
    const[locationQuery, setLocationQuery] = useState([]);

//  formatDefault = filterItem(DATAinput)
    
    useEffect(() => 
        
    )


    return(
    //code example --->
        // <input
        //     type="text"
        //     value={useSearch}
        //     onChange={handelerSearch}/>
            
        //     <ul>
        //         {data.map((item) => ( 
                    
        //                <li key={item.id}>{item.title}</li>
                    
        //         ))}
        //     </ul>
        <div className="Searchbar">
              <div className="row-cover">
            <div className="row">
                <h1>
                    Plan your Holiday today!!
                </h1>
                <label htmlFor="city">Search your destination:
                </label>
                <div className="input flex">
                    <input type ="text" placeholder="Enter your destination"value={filterItem.InputUser.location} />
                </div>
            </div>
            <div className="row">
                <label>Check Offers</label>
                <input type="date" value={setInputUser.date} />            
            </div>
                
            <div className="row">
            <label htmlFor="city">Search your destination:
                </label>
                <div className="input flex">
                    <input type ="price" placeholder="How much money you planning to take" value={filterItem.setInputUser.amount} />
                </div> 
            </div>
            <div className="button-row"> 
                <div className="button-container">
                    <Button variant="contained" onClick={filterItem.handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>

        </div>






        </div>
    );
}
export default Searchbar;