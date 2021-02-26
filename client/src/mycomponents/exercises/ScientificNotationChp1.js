import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chaptertemplate from "../ChapterTemplate"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const title = "Scientific Notation"
const opening = `As chemical engineer, it's quite common to deal with both 
very large and very small numbers. A convenient way to represent such numbers 
is to use scientific notation, in which a number is expressed as athe product 
of another number (usually between 0.1 and 10) and a power of 10. For example:`
const main = `The significant figures of a number are the digits from the first 
nonzero digit on the left to either (a) the last digit (zero or nonzero) on the 
right if there is a decimal point, or (b) the last nonzero digit of the number if there
is no decimal point. For example: `
const main2 = ` equations 1, 2 and 3 have two, four and four significant figures respectively `
const openingEquation1 = `123,000,000 = 1.23 x 10^8`
const openingEquation2 = `0.000028 = 2.8 x 10^-5`
const equation1 = `1.)`+" "+`  2300 or 2.3x10^3`
const equation2 = `2.)`+" "+`23,040 or 2.304x10^4`
const equation3 = `3.)`+" "+`0.03500 or 3.500x10^-2`
const equation4 = ``
const equation5 = ``
const instructions = `Run the animations.`
const endpoint = "/ChemProCourse/Chapter1/Estimation"
const endpointprev = "/ChemProCourse/Chapter1/ForceandWeight"
const text = ` `






const ScientificNotation = () =>{

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();

    return (
        
        !isAuthenticated&&(

            <Chaptertemplate 
            title={title} 
            opening={opening} 
            main={main} 
            main2={main2}
            openingEquation1={openingEquation1}
            openingEquation2={openingEquation2}
            equation1={equation1} 
            equation2={equation2} 
            equation3={equation3}
            equation4={equation4} 
            equation5={equation5}
            instructions={instructions} 
            endpoint={endpoint}
            endpointprev={endpointprev}
            text={text}
           
            />
        )
    )
}


export default  ScientificNotation