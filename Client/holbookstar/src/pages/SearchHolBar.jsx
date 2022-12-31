import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavItem } from "react-bootstrap";
import "./SearchHolBar";

function SearchHolBar(){
 
    const BACKEND_PATH = "http://localhost:8900/";

    const [useSearch, setUseSearch] = useState('');
    const [data, setData] = useState([]);
    // const filterData = data.filter((index) => {
    //     return index.location.toLowerCase().includes(useSearch.toLowerCase());
    // });
      
        useEffect(() => {
            const fetchData = async () => {
                // axios.get(`${BACKEND_PATH}Login`)
                const resultOFSertver = await axios.get(`${BACKEND_PATH}location`, {
                    params: {
                        filter: useSearch
                    }
                });
                console.log(useSearch);
                setData(resultOFSertver.data);
            };
            fetchData();
        }, [useSearch]);
        const checkQuery = async () => {

        };
       
    const handelerSearch = (e) => {
        setUseSearch(e.target.value);
    }


        return(
            <div className="SearchHolBar"> 
            <input
            type="text"
            value={useSearch}
            onChange={handelerSearch}/>
            
            <ul>
                {data.map((item) => ( 
                    
                       <li key={item.id}>{item.title}</li>
                    
                ))}
            </ul>
        </div>



);


} export default SearchHolBar;
