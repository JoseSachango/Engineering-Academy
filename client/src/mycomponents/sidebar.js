import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { teal,grey,yellow,red } from '@material-ui/core/colors';
export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <aside>
     

      <div className="description" style={{marginBottom:"10px", marginLeft:"10px", marginRight:"5px"}}>You can drag these nodes to the pane on the left.</div>
        <Grid container>
            <Button variant="outlined" size="small" color="primary" style={{marginBottom:"10px", marginLeft:"10px", marginRight:"5px"}} >

                <div className="dndnode input" onDragStart={(event) => onDragStart(event, `{"type":"input","name":"Input", "sourcePosition": "right", "targetPosition": "left"  }`)} draggable >
                    Input Node
                </div>

            </Button>
        </Grid>
        <Grid container>
            <Button variant="outlined" size="small" color="primary" style={{marginBottom:"10px", marginLeft:"10px", marginRight:"5px"}} >   
            <div className="dndnode" onDragStart={(event) => onDragStart(event, `{"type":"default","name":"HeatX", "sourcePosition": "right", "targetPosition": "left" }`)} draggable>
                HeatX 
            </div>
            </Button>       
        </Grid>
        <Grid container>
            <Button variant="outlined" size="small" color="primary" style={{marginBottom:"10px", marginLeft:"10px", marginRight:"5px"}} >
                <div className="dndnode" onDragStart={(event) => onDragStart(event, `{"type":"default", "name":"Distillation", "sourcePosition": "right", "targetPosition": "left"}`)} draggable>
                    Distillation column 
                </div>
            </Button>       
        </Grid>
        <Grid container>
            <Button variant="outlined" size="small" color="primary" style={{marginBottom:"10px", marginLeft:"10px", marginRight:"5px"}} >
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, `{"type":"output", "name":"Test", "sourcePosition": "right", "targetPosition": "left"}`)} draggable>
                    Output Node
                </div>
            </Button>           
        </Grid>




    </aside>
  );
};