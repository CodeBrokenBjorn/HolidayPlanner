import React, {useState, useEffect} from "react";
import "./Searchbar.css";
import { Button } from "react-bootstrap";
import CallenderContent from "../CallenderContent/CallenderContent";
import { addItems } from "../../action/setAction";
function Searchbar() {
    const[locationQuery, setLocationQuery] = useState([]);
    const[success, setSuccess] = useState(false);
    const[error, setError] = useState(false);
    const[id , setId] = useState("");   
    const[destination, setDestination] = useState("");
    const[startDate, setStartDate] = useState("");
    const[endDate, setEndDate] = useState("");
    const[amount, setAmount] = useState(0);
    const[bookPlan_id , setBookPlan_id] = useState("");

//  formatDefault = filterItem(DATAinput)
    const postDataSubmitOnBackEnd = async(items) => {
    console.log(items);
       try{
        let response = await addItems(items);
        if(response) {
            setSuccess(true);
        }
       } 
       catch(e){
            setError(e.message);
       }



    }
    const sumbitAllData = async(e) => {
        setSuccess(false);
        if(destination && startDate && endDate && amount){
            let items = {
                id: id,
                Destination: destination,
                StartDate: startDate,
                EndDate: endDate,
                Amount: amount,
                exclude: [bookPlan_id],
        

            };
            postDataSubmitOnBackEnd(items);
        }

    }


    return(
        <div className="Searchbar">
              <div className="row-cover">
            <div className="row">
                <h1>
                    Plan your Holiday today!!
                </h1>
                <label htmlFor="city">What Location Your Planning to travel:
                </label>
                <div className="input flex">
                    <input required type ="text" onChange={(e) => setDestination(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <label>Start Date:</label>
                <input required type="date" onChange={(e) => setStartDate(e.target.value)} />            
            </div>
            <div className="row">
                <label>End Date:</label>
                <input required type="date" onChange={(e) => setEndDate(e.target.value) } />            
            </div>
            <div className="row">
                <div className="input flex">
                    <label>"How much money you planning to take"</label>
                    <input required type ="price" placeholder="£"  onChange={(e) => setAmount(e.target.value)} />
                </div> 
            </div>
            <div className="button-row"> 
                <div className="button-container">
                    <Button variant="contained" onClick={sumbitAllData}>
                        Submit
                    </Button>
                </div>
            </div>

        </div>






        </div>
    );
}
export default Searchbar;