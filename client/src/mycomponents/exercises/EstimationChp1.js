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
import { teal,grey,yellow,red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const title = "Estimation"
const opening = `Suppose, as a chemical engineer, you carry out a chemical reaction of the form A > B. 
In order to optimize the amount of product that's being produced it's necessary to take measurements of the reactors contents
to determine X, the percentage of the A fed that has reacted. In theory X should have a unique value; however, in a real reactor X is a random variable. 
This means that X changes in an unpredictable manner from one run to another at the same experimental conditions. The values of X obtained after 4 successive 
runs might be as follows:`
const main = ``
const main2 = `If this is the case  you might ask, what's the true value of X? The most common estimate is the sample mean (or artihmetic mean).
We collect N measured values of X (X1,X2,...,Xn) and then calculate:`
const main3 = `Three quantities (the range, the sample variance, and the sample standard deviation) are used to express the extent to which values of a random variable scatter about their mean value. They're written in consecutive order below.`
const main2equation = `X_(mean) = (1/N)(X_1+X_2+...+X_N) = (1/N)sum_(j=1)^N(X_j)`
const main3equation = ` R = X_(max)-X_(min)`
const main3equation1= ` s_(X)^2 = (1/(N-1))[(X_1-X_(avg))^2+(X_2-X_(avg))^2+...+(X_N-X_(avg))^2] `
const main3equation2= ` s_X = (s_(X)^2)^(1/2)`
const equation1 = ``
const equation2 = ``
const instructions = `Run the animations.`
const endpoint = "/ChemProCourse/Chapter1/Dimensionless"



function createData(Run, one, two, three, four) {
    return { Run, one, two, three, four };
  }


const rows = [
    createData("X(%)", 73.1, 69.6, 24, 67.4),
    
  ];

const Estimation = () =>{

    const classes = useStyles();

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();
    const table = <TableContainer component={Paper} style={{backgroundColor: grey[100]}}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Run</TableCell>
          <TableCell align="right">1</TableCell>
          <TableCell align="right">2</TableCell>
          <TableCell align="right">3</TableCell>
          <TableCell align="right">4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.Run}
            </TableCell>
            <TableCell align="right">{row.one}</TableCell>
            <TableCell align="right">{row.two}</TableCell>
            <TableCell align="right">{row.three}</TableCell>
            <TableCell align="right">{row.four}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>


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
            table={table}
            main2={main2}
            main3={main3}
            main2equation={main2equation}
            main3equation={main3equation}
            main3equation1={main3equation1}
            main3equation2={main3equation2}
            
                
            />
        )
    )
}


export default  Estimation