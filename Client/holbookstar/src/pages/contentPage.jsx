import React from "react";
import "./ContentPage.css";
import Hero from "../Components/Hero";
import DisplayGrid from "../Components/Grid/DisplayGrid";
import useLoginHook from "../action/useLoginHook";


function ContentPage() {
    return (<div className='contentPage'>
        
        <DisplayGrid />

    </div>
    );
  }
  
  export default ContentPage;