import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from "axios"
import Button from '@material-ui/core/Button';

//----------------------------------------------------------------------------------------------Streams Table Information
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(streams, totalmols, totalenthalpy, pressure, temperature) {
    return {
      streams,
      totalmols,
      totalenthalpy,
      pressure,
      temperature,
      
    
    };
  }



  


  
  const rowsStreams = [
    createData("props", 0, 0, 0, 0, 0),
    createData("props", 0, 0, 0, 0, 0),
    createData('Eclair', 0, 0, 0, 0, 0),
    createData('Cupcake', 0, 0, 0, 0, 0),
    createData('Gingerbread', 0, 0, 0, 0, 0),
  ];
  

//---------------------------------------------------------------------------------------------Streams table infromation

export default function StreamsTable(props) {


const [streamsId,setStreamsId] = useState()
  const [streamsMols,setStreamsMols] = useState()
  const [streamsEnthalpy,setStreamsEnthalpy] =  useState()
  const [streamsPressure,setStreasmsPressure] = useState()
  const [streamsTemperature,setStreamsTemperature] = useState()


    
  

  return (
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={7}>
              {props.unitname}
            </TableCell>
            
          </TableRow>
          <TableRow>
            
            <TableCell>Streams</TableCell>
            <TableCell align="right">Total Moles (mol)</TableCell>
            <TableCell align="right">Total Enthalpy (Kj/mol)</TableCell>
            <TableCell align="right">Pressure (Pa)</TableCell>
            <TableCell align="right">Temperature (C)</TableCell>
           

          </TableRow>
        </TableHead>
        <TableBody>
        
          {rowsStreams.map((row) => (
            <TableRow key={row.streams}>
              <TableCell component="th" scope="row">
                       {row.streams}
                
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.totalmols}
                        onChange={(evt) => {
                            setStreamsMols(evt.target.value)
                            row.totalmols = evt.target.value
                            }}
                        />
              
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.totalenthalpy}
                        onChange={(evt) => {
                            setStreamsEnthalpy(evt.target.value)
                            row.totalenthalpy = evt.target.value
                            }}
                        />
              
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.pressure}
                        onChange={(evt) => {
                            setStreasmsPressure(evt.target.value)
                            row.pressure = evt.target.value
                            }}
                        />
              
              </TableCell>
              <TableCell align="right">
                        <input
                        value={row.temperature}
                        onChange={(evt) => {
                            setStreamsTemperature(evt.target.value)
                            row.temperature = evt.target.value
                            }}
                        />
              
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={() => { 

         

            axios.post("/api/Streams",{unitName:props.unitname,rows:rowsStreams}).then(results=>{
                console.log("The data was successfully posted to the endpoint /api/Streams :",results)

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
  );
}