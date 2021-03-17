import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { useAuth0 } from "@auth0/auth0-react";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StreamsTable from "./streamsTable"

const TAX_RATE = .7



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(compound, molesin, enthalpyin,molesout,enthalpyout,pressure,temperature,size,utilities,cost) {
  /*const price = priceRow(qty, unit);*/
  /*return { desc, qty, unit, price };*/
  /*<TableCell align="right">{ccyFormat(row.price)}</TableCell> */
  return {compound, molesin, enthalpyin,molesout,enthalpyout,pressure,temperature,size,utilities,cost}
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}









export default function SpanningTable(props) {



  const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0();

  const [rows,setRows] = React.useState([
    
      createRow('', 0, 0, 0,0,0,0,0,0,0),
      
    
  ])
  const [typing,setTyping] = React.useState(true)
  const [clicked,setClicked] = React.useState(true)

  const rows2 = []

  if(typing){
    axios.get("/api/User/"+JSON.stringify({name:user.name,userId:user.sub})).then(results=>{
      console.log("This is the user data: ", results)
      //console.log("This is the project name: ",results.data.newProject[results.data.newProject.length-1])
      var i;
      for(i=0;i<results.data.newProject[results.data.newProject.length-1].components.length;i++){
        rows2.push(createRow(results.data.newProject[results.data.newProject.length-1].components[i].component,0, 0, 0,0,0,0,0,0,0))
      }

      //console.log("This is rows2: ",rows2)
      setRows(rows2)

      setTyping(false)
      
      
    })
    .catch(err=>{
      console.log("There was an err with the request: ",err)
    })
  }

/*
if(typing){
  axios.get("/api/unitTable/"+props.unitname).then(results=>{
    console.log("Tkjhkjhkjhkj: ", results)
    //console.log("This is the project name: ",results.data.newProject[results.data.newProject.length-1])
  
    
    //console.log("This is rows2: ",rows2)
    setRows(results.data.rows)

    setTyping(false)
    
   
  })
  .catch(err=>{
    console.log("There was an err with the request: ",err)
  })
}*/
  /*
  var rows = [
    createRow('Naphta', 0, 0, 0,0,0,0,0,0,0),
    createRow('Kerosene', 0, 0, 0,0,0,0,0,0,0),
    createRow('Diesel', 0, 0, 0,0,0,0,0,0,0),
    createRow('Residue', 0, 0, 0,0,0,0,0,0,0),
  ];*/



  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;



  const classes = useStyles();


    const createTableCell = (value,setState) =>{
        return (
            <TableCell align="right">
                        <input
                        value={value}
                        onChange={(evt) => {
                            setState(evt.target.value)
                            
                            rows.molesout = evt.target.value
                            }}
                        />
              </TableCell>
        )
    } 

  //----------------------------------------------------------------------------------------------
  const [molesIn,setMolesIn] = React.useState(0)
  const [enthalpyIn,setEnthalpyIn] = React.useState(0)
  const [molesOut,setMolesOut] = React.useState(0)
  const [enthalpyOut,setEnthalpyOut] = React.useState(0)
  const [pressure,setPressure] = React.useState(0)
  const [temperature,setTemperature] = React.useState(0)
  const [sizing,setSizing] = React.useState(0)
  const [utilities,setUtilities] = React.useState(0)
  const [cost,setCost] = React.useState(0)
  const [elements,setElements] = React.useState(rows)
  const [compound,setCompound] = React.useState("")
  //-----------------------------------------------------------------------------------------------

  return (

<>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          
          <TableRow>
            <TableCell align="left" colSpan={10}>
              {props.unitname}
            </TableCell>
            
          </TableRow>
         
          <TableRow>
            <TableCell>Component</TableCell>
            <TableCell align="right">Moles In (mol)</TableCell>
            <TableCell align="right">Enthalpy In (Kj/mol)</TableCell>
            <TableCell align="right">Moles Out (mol)</TableCell>
            <TableCell align="right">Enthalpy Out (Kj/mol)</TableCell>
            <TableCell align="right">Pressure (Pa)</TableCell>
            <TableCell align="right">Temperature (C)</TableCell>
            <TableCell align="right">Size (m^3)</TableCell>
            <TableCell align="right">Utilities (USD/Watt)</TableCell>
            <TableCell align="right">Cost (USD)</TableCell>



          </TableRow>


        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.compound}>
              <TableCell>
              {row.compound}
             
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.molesin}
                        onChange={(evt) => {
                            setMolesIn(evt.target.value)
                            row.molesin = evt.target.value
                            }}
                        />
            
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.enthalpyin}
                        onChange={(evt) => {
                            setEnthalpyIn(evt.target.value)
                            row.enthalpyin = evt.target.value
                            }}
                        />
              
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.molesout}
                        onChange={(evt) => {
                            setMolesOut(evt.target.value)
                            row.molesout = evt.target.value
                            }}
                        />
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.enthalpyout}
                        onChange={(evt) => {
                            setEnthalpyOut(evt.target.value)
                            row.enthalpyout = evt.target.value
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
              <TableCell align="right">
                        <input
                        value={row.size}
                        onChange={(evt) => {
                            setSizing(evt.target.value)
                            row.size = evt.target.value
                            }}
                        />
              </TableCell>
              
              {createTableCell(row.utilities,setUtilities)}
              {/*<TableCell align="right">
                        <input
                        value={row.utilities}
                        onChange={(evt) => {
                            setUtilities(evt.target.value)
                            row.utilities = evt.target.value
                            }}
                        />
              </TableCell>*/}
              <TableCell align="right">
                        <input
                        value={row.cost}
                        onChange={(evt) => {
                            setCost(evt.target.value)
                            row.Cost = evt.target.value
                            }}
                        />
              </TableCell>
              
              
            </TableRow>
          ))}

            {//TODO: Change the values for net energy and clean up code
            }                      
          <TableRow>
            <TableCell rowSpan={4} colSpan={7}/>
            
            <TableCell colSpan={2}>Net Energy (Kj)</TableCell>
            <TableCell align="right">
                        <input
                        value={""}
                        onChange={(evt) => {
                            setEnthalpyIn(evt.target.value)
                            
                            }}
                        />
            </TableCell>
          </TableRow>
          <TableRow>
            
            <TableCell>Total Cost (USD)</TableCell>
            <TableCell align="right">
                        <input
                        value={"row.enthalpyin"}
                        onChange={(evt) => {
                            setEnthalpyIn(evt.target.value)
                            
                            }}
                        />
            </TableCell>
            <TableCell align="right">
                        <input
                        value={"row.enthalpyin"}
                        onChange={(evt) => {
                            setEnthalpyIn(evt.target.value)
                            
                            }}
                        />
            </TableCell>
          </TableRow>
          <TableRow>
           
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">
                        <input
                        value={"row.enthalpyin"}
                        onChange={(evt) => {
                            setEnthalpyIn(evt.target.value)
                           
                            }}
                        />
            </TableCell>
          </TableRow>
          <TableRow>
           
            <TableCell colSpan={2}></TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={() => { 

                console.log("This is props.unitname: ",props.unitname)
               
                
                axios.post("/api/unitTable",{unitName:props.unitname,rows:rows}).then(results=>{
                    console.log("The data was successfully posted to the endpoint /api/unitTable/:id :",results)

                    axios.get("/api/unitTable/"+props.unitname).then(results2=>{
                        console.log("This is the result from the axios get request to the /api/unitTable/:id endpoint: ",results2)
                        
                        
                    }).catch(err2=>{
                        console.log("This is the error message that was recieved from the /api/unitTable endpoint:",err2)
                        
                    })

                   
                }).catch(err=>{
                    console.log("There was an error with the post request to the /api/unitTable/:id endpoint: ",err)
                })
             }}>
             Submit
             </Button>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>



</>


  );
}