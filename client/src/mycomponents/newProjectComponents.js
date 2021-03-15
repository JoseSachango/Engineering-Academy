import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';






const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(component, moleFraction, pressure, temperature) {
  return { component, moleFraction, pressure, temperature};
}

const rows = [
  createData('', 0, 0, 0, 0),
  createData('', 0, 0, 0, 0),
  createData('', 0, 0, 0, 0),
  createData('', 0, 0, 0, 0),
  
];

export default function BasicTable(props) {
  const classes = useStyles();
  const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0();


  const [component, setComponent] = useState()
  const [moleFraction, setMoleFraction] = useState()
  const [pressure, setPressure] = useState()
  const [temperature,setTemperature] = useState()
  const [projectName,setProjectName] = useState("")
  const [toggle,setToggle] = useState()

  return (
    isAuthenticated&&(

    <>
    <Typography variant="h3" component="h6" gutterBottom>
        Create Project
    </Typography>
    <TableContainer component={Paper} elevation={5}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>
                  Project Name:
              </TableCell>
              <TableCell>
                        <input
                        value={projectName}
                        onChange={(evt) => {
                            setProjectName(evt.target.value)
                            
                            }}
                        />
              </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Component</TableCell>
            <TableCell align="right">Mole Fraction</TableCell>
            <TableCell align="right">Pressure (Pa)</TableCell>
            <TableCell align="right">Temperature (C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                        <input
                        value={row.component}
                        onChange={(evt) => {
                            setComponent(evt.target.value)
                            row.component = evt.target.value
                            }}
                        />
                
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.moleFraction}
                        onChange={(evt) => {
                            setMoleFraction(evt.target.value)
                            row.moleFraction = evt.target.value
                            }}
                        />
              
              </TableCell>
              <TableCell align="right">
                         <input
                        value={row.pressure}
                        onChange={(evt) => {
                            setPressure(evt.target.value)
                            row.pressure = evt.target.value
                            }}
                        />
              
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.temperature}
                        onChange={(evt) => {
                            setTemperature(evt.target.value)
                            row.temperature = evt.target.value
                            }}
                        />
            
              </TableCell>
            </TableRow>
            
            
          ))}
          <TableRow>
            <TableCell rowSpan={4} colSpan={4}/>
            
            
            <TableCell align="right">
            <Button variant="contained" onClick={() => { 

           
               
            axios.post("/api/newProject",{newProjectName:projectName,components:rows,name:user.name,userId:user.sub}).then(results=>{
                console.log("The data was successfully posted to the endpoint /api/newProject :",results)

                setToggle(1)
               
            
            }).catch(err=>{
                console.log("There was an error with the post request to the /api/newProject endpoint: ",err)
            })
            }}>
            Submit
            </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container justify="center" style={{marginTop:"50px"}}>
      {toggle&&(
        <Button variant contained component={Link} to="/Simulator">
          Continue
        </Button>
      )}
    </Grid>
    </>

    )
  );
}