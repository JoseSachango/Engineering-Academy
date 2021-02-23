import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chaptertemplate from "../ChapterTemplate"

const title = "Force and Weight"
const opening = `Force is another fundamental concept in chemical enigneering. With it, we can derive many other important quantities of interest
like mass and energy.  `
const main = `Force is discribed by Newtons second law of motion, which states force is proportional to mass  times acceleration. `
const main2 = ` The weight of an object is the force exerted on an object due to gravitational acceleration.`
const equation1 = `F = m * a`
const equation2 = ` W = m * g`
const instructions = `Run the animations.`
const endpoint = "/ChemProCourse/Chapter1/ScientificNotation"

const ForceandWeight = () =>{

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();


    return (
        
        !isAuthenticated&&(

            <Chaptertemplate 
            title={title} 
            opening={opening} 
            main={main} 
            equation1={equation1} 
            equation2={equation2}  
            instructions={instructions} 
            endpoint={endpoint}
                
            />
        )
    )
}


export default  ForceandWeight