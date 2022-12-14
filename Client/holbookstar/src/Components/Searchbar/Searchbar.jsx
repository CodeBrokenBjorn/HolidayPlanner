import React, { useState, useEffect } from "react";
import axios from "axios";
import './Searchbar.css';
import {Container} from "react-bootstrap";
import { TextField, unstable_getUnit} from "@mui/material";
function Searchbar() {
    const BACKEND_URL = "https://localhost:8900/";
    const [userinput, setUserinput] = useState();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    const [query, setQuery] = useState([
        {   
            user: {
                id: id,
                title: title,
                image: image,
                description: description,
            },
        },
        
    ]);

    const addContent = () => {
        //add input here
        // still thinking what it will do
    }
    const Searchbar = async () => {
        if(!!userinput){
            setQuery([...query, setUserinput]);
        }
        return axios
            .post(`${BACKEND_URL}/travelDestination`, { data: JSON.stringify(setQuery) })
            .then((response) => response)
            .catch((error) => console.error(error));



    }
    return (
        <div className="Searchbar">
            <div className="mb-5">
                <Container>
                    <div className="search">
                        <TextField
                            id="outline-basic"
                            variant="outlined"
                            //on changes the setName change to specific
                            //thing..
                            value = {userinput} onChange= {(e) => setUserinput(e.target.value)}
                            fullWidth
                            label="Search"
                        />


                    </div>
                    {query.map({})}



                </Container>
            </div>
        </div>
    );
}
export default Searchbar;