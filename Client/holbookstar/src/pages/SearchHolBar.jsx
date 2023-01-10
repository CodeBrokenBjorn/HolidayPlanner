import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavItem } from "react-bootstrap";
import "./SearchHolBar";
import Searchbar from "../Components/Searchbar/Searchbar";

function SearchHolBar(){
        return(
            <div className="SearchHolBar"> 
            <div className="stuff">
                    <Searchbar />
            </div>
        </div>

);


} export default SearchHolBar;
