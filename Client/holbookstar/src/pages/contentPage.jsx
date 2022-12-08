import React from "react";
import "./ContentPage.css";
import Hero from "../Components/Hero";
import Grid from "../Components/Grid";
import useLoginHook from "../action/useLoginHook";

function ContentPage() {
    return (<div className='contentPage'>
        <Grid />
    </div>
    );
  }
  
  export default ContentPage;