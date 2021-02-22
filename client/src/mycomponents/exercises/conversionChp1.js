import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chaptertemplate from "../ChapterTemplate"

const title = "Lorem Lorem"

const Conversion = () =>{

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();


    return (
        
        !isAuthenticated&&(

            <Chaptertemplate title={title} />
        )
    )
}


export default  Conversion