import React, { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>({
    root:{

    },
    paper:{

    }

}))


const LandingPage = () =>{

    //Variables to check if the user is authenticated and collect user infromation. If the user is authenticated then we display a different page
    const { user, isAuthenticated } = useAuth0();

    const classes = useStyles()


    return (
        
        isAuthenticated && (
            <h1>Hello world</h1>
        )

    )
}



export default LandingPage