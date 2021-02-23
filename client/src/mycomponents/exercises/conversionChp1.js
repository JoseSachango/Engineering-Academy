import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chaptertemplate from "../ChapterTemplate"

const title = "Conversion Factors"
const opening = `In most engineering problems there's a need to convert a quantity of one unit to it's equivalent value in another unit. 
To do this we use what are called conversion factors.`
const main = `Conversion factors are ratios that that represent that relationship between two units. For example: `
const equation1 = `(1cm)/(10mm)`
const equation2 = ` (36mg) * ((1g)/(1000mg)) = .036g`
const instructions = `Let's get some practice with conversion factors. In the terminal to the right solve the equations listed.`
const endpoint = "/ChemProCourse/Chapter1/ForceandWeight"
const text = `1 centimeter per 10 milimeters`

const Conversion = () =>{

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
            text={text}

            />
        )
    )
}


export default  Conversion