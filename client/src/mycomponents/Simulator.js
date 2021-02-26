import React, { useState, useRef, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Handle
} from 'react-flow-renderer';
import Sidebar from './sidebar';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import AppBar from "@material-ui/core/AppBar";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import User from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

import Dashboard from '@material-ui/icons/Dashboard'
import Book from '@material-ui/icons/MenuBook'
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/icons/TableChart'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ListSubheader from '@material-ui/core/ListSubheader';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
//import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import ChartistGraph from 'react-chartist';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { grey } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Revenue from '@material-ui/icons/AccountBalance'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios"
import CustomEdge from './CustomEdge';//For the flow diagram

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar:
      theme.mixins.toolbar
    ,
    drawerPaper: {
      width: drawerWidth,
     
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    nested: {
        paddingLeft: theme.spacing(2),
      },
    paper: {
        marginRight: theme.spacing(2),
      },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
    expandOpen: {
        transform: 'rotate(180deg)',
      },
    avatar: {
        backgroundColor: red[500],
      },
    card : {
        maxWidth: 345
    },
    cardheader: {
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "0px",
      border: "0",
      marginBottom: "-60px",
      background: "red",
      width: 100,
      textAlign: 'center',
      height: "75px"
    },
    cardheader2: {
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "0px",
      border: "0",
      marginBottom: "-60px",
      background: "red",
      width: 300,
      textAlign: 'center',
      height: "75px"
    },
    cardcontent:{
      marginTop: "5px",
      textAlign: 'right',
      
    },
    cardtitle:{
      fontSize: 30
    },
    chart:{
      marginTop: "50px",
      marginBottom: "70px",
     
    },
    chart2:{
      width:300,
      height: 100,
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "0px",
      border: "0",
      marginBottom: "-60px",
      background: "red",
      width: 300,
      textAlign: 'center',
      height: "75px"
    },
    tabs:{
       
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      
    },
    chart3:{
      marginTop: "50px",
      marginBottom: "50px"
    }
}))




//-----------------------------------------For the flow diagram
const initialElements = [
    
    
  ];
  let id = 0;
  const getId = () => `horizontal-${id++}`;
//-----------------------------------------End of for the flow diagram

const Simulation = (props) => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();


  

   
        
            const { window } = props;
            const classes = useStyles();
            const theme = useTheme();
            const [mobileOpen, setMobileOpen] = React.useState(false);
            const [open, setOpen] = React.useState(false);
            

 //----------------------------------------------------------------------------------------------------------Everthing for the flow diagram
            const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [sourceHandle,setSourceHandle] = useState({})
  const [targetId,setTargetId] = useState("")
  const [nodeName, setNodeName] = useState('');
  const [nodeMass, setNodeMass] = useState("")
  const [nodeEnergy, setNodeEnergy] = useState("")
  const [elementClickedId, setElementClickedId] = useState("")
  const [elementClickedLabel, setElementClickedLabel] = useState("")




  const onConnect = (params) => {
    //Write something here that does a calculation on params.sourceHandle use data.text or data.whatever
    setSourceHandle(JSON.parse(params.sourceHandle))
    setTargetId(params.target)
    setElements((els) => addEdge({ ...params, animated: true, style: { stroke: '#000' } }, els) )

    console.log("This is the params variable: ",params)
    console.log("These are all the elements:  ",elements)
  };//I Don't understand what's going on here.

  //---------------------------------------useEffect for transfering data via edge connect
  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === targetId) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
         

          el.data = {
            ...el.data,
            mass: sourceHandle.mass ,
            energy: sourceHandle.energy  , 
          }; //Source handle should be an object
        }
        return el;
      })
    );
  }, [sourceHandle, setElements,targetId]); 
  //---------------------------------------


  //---------------------------------------useEffect for editing data in the node
  const onElementClick = (event, element) => {
    console.log('This is the click element: ', element)
    setElementClickedId(element.id)
    
    setNodeName(element.data.label)
    setNodeMass(element.data.mass)
    setNodeEnergy(element.data.energy)

};

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === elementClickedId) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
         

          el.data = {
            ...el.data,
            label: nodeName,
          };
        }
        return el;
      })
    );
  }, [nodeName, setElements,elementClickedId]);


  useEffect(() => {
      setElements((els) =>
        els.map((el) => {
          if (el.id === elementClickedId) {
            // it's important that you create a new object here
            // in order to notify react flow about the change
           

            el.data = {
              ...el.data,
              mass: nodeMass,
            };
          }
          return el;
        })
      );
    }, [nodeMass, setNodeMass,elementClickedId]);

    useEffect(() => {
      setElements((els) =>
        els.map((el) => {
          if (el.id === elementClickedId) {
            // it's important that you create a new object here
            // in order to notify react flow about the change
           

            el.data = {
              ...el.data,
              energy: nodeEnergy,
            };
          }
          return el;
        })
      );
    }, [nodeEnergy, setNodeEnergy,elementClickedId]);
  //---------------------------------------


  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const graphStyles = { width: "100%", height: "300px" };
  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const typeO = JSON.parse(type)
    //console.log("This is the type of node: ",typeO)
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    //console.log("This is the current id before newNode: ", id)
    const newNode = {
      id: getId(),
      type: typeO.type,
      sourcePosition: typeO.sourcePosition,
      targetPosition: typeO.targetPosition,
      position,
      data: { label: `${typeO.name} node`,text:"all the info here",mass:"",energy:"", properties:{} },
      
    };
    
    //console.log("This is the current id after newNode: ", id)
    //console.log("This is the newEdgeId before newEdge: ",newEdgeId)
    
    
  
    //console.log("This is the current id after newEdge: ", id)
    //console.log("THis is the newEdge object: ", newEdge)
    //console.log("This is the newNode object: ", newNode)
    setElements((es) => es.concat(newNode));
    
    //console.log("This is the new initialelements array: ",elements)
  };

  const edgeTypes = {
    default: CustomEdge,
  };

  //----------------------------Custom nodes
  const customNodeStyles = {
    background: '#9CA8B3',
    color: '#FFF',
    padding: 10,
  };

  const CustomNodeComponent = ({ data }) => {
    return (
      <div style={customNodeStyles}>
        <Handle type="target" position="left" style={{ borderRadius: 0 }} />
        <div>{data.text}</div>
        <Handle
          type="source"
          position="right"
          id={JSON.stringify(data)}
          style={{ top: '30%', borderRadius: 0 }}
        />
        <Handle
          type="source"
          position="right"
          id="b"
          style={{ top: '70%', borderRadius: 0 }}
        />
      </div>
    );
  };

  const nodeTypes = {
    output: CustomNodeComponent,//This applies to all nodes with the name output
    default: CustomNodeComponent,
    input: CustomNodeComponent
  };
  //------------------------------Custom nodes end
  

//----------------------------------------------------------------------------------------------------End of everything for the flow diagram
          
            
            

            const handleClick = () => {
                setOpen(!open);
            };

           //--------------------------->MenuList functionality
           const [openMenuList, setOpenMenuList] = React.useState(false);
             const anchorRefMenuList = React.useRef(null);
           const handleToggleMenuList = () => {
            setOpenMenuList((prevOpen) => !prevOpen);
          };
        
          const handleCloseMenuList = (event) => {
            if (anchorRefMenuList.current && anchorRefMenuList.current.contains(event.target)) {
              return;
            }
        
            setOpenMenuList(false);
          };
        
          function handleListKeyDownMenuList(event) {
            if (event.key === 'Tab') {
              event.preventDefault();
              setOpenMenuList(false);
            }
          }
        
          // return focus to the button when we transitioned from !open -> open
          const prevOpen = React.useRef(openMenuList);
          React.useEffect(() => {
            if (prevOpen.current === true && openMenuList === false) {
              anchorRefMenuList.current.focus();
            }
        
            prevOpen.current = openMenuList;
          }, [openMenuList]);
        




           //---------------------------End of MenuList

           //---------------------------Chart Information
            

                  //------------------------New chart data
            

                  //------------------------







                  //-------------------------------New chart data2
                
                  //----------------------------------




           //---------------------------End of chart info 
           //---------------------------Card with header functionality
       
           //---------------------------End of card with header
          

            const handleDrawerToggle = () => {
              setMobileOpen(!mobileOpen);
            };

            const sidebarIcons = {
                Dashboard: <Dashboard/>,
                Course : <Book/>,
                Tables: <Table />
            }




            //-----------------------------------------Chart tabs functions and data

           
              
             
            //-----------------------------------------Chart tabs end


            //-----------------------------------------Data xgrid
            const columns = [
              { field: 'id', headerName: 'ID', width: 70 },
              { field: 'firstName', headerName: 'First name', width: 130 },
              { field: 'lastName', headerName: 'Last name', width: 130 },
              {
                field: 'age',
                headerName: 'Age',
                type: 'number',
                width: 90,
              },
              {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                  `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
              },
            ];
            
            const rows = [
              { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
              { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
              { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
              { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
              { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
              { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
              { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
              { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
              { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
            ];

            
            //-----------------------------------------End of data xgrid

            
           
            

            
            
            const drawer = (
              <div>
                
                <div className={classes.toolbar} />
              
                <Divider />
                <List>
                  {['Saved Projects', 'New Project', 'Components', 'Methods'].map((text, index) => (
                    <>
                        {text==="Course"? (
                            <>
                                <ListItem button key={text}  onClick={handleClick}>
                            
                                <ListItemIcon>{sidebarIcons[text] ?  sidebarIcons[text] : null}</ListItemIcon>


                                    <ListItemText primary={text} /> 
                                    {open ? <ExpandLess /> : <ExpandMore />}
                            
                            
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon>
                                            <StarBorder />
                                            </ListItemIcon>
                                            <Link to="/ChemProCourse" role="button" className="btn btn-link">
                                              <ListItemText primary="Chemical Processes" />
                                            </Link>
                                           
                                           
                                        </ListItem>
                                     
                                        </List>
                                </Collapse>
                            </>
                        ):
                        (
                            <ListItem button key={text}  >
                                
                                <ListItemIcon>{sidebarIcons[text] ?  sidebarIcons[text] : null}</ListItemIcon>


                                <ListItemText primary={text} /> 
                                
                                
                                
                            </ListItem>
                            
                        )}
                        
                        
                    </>
                    
                        
                    ))}
                </List>
                    

              </div>
            );

          
            const container = window !== undefined ? () => window().document.body : undefined;
            console.log(sidebarIcons.Book)

            return (
                
                !isAuthenticated&&(
                    
                <div className={classes.root}>
                
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Grid container>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Grid item sm={11}>
                        <Typography variant="h6" noWrap>
                        Dashboard
                        </Typography>

                        </Grid>
                        <Grid item sm={1} justify="flex-end">

                            {/*MenuList*/}
                                <Button
                                ref={anchorRefMenuList}
                                aria-controls={openMenuList ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggleMenuList}
                                >
                                   <User style={{color: grey[50]}}/>
                                </Button>
                                <Popper open={openMenuList} anchorEl={anchorRefMenuList.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleCloseMenuList}>
                                        <MenuList autoFocusItem={openMenuList} id="menu-list-grow" onKeyDown={handleListKeyDownMenuList}>
                                            <MenuItem onClick={handleCloseMenuList}>Profile</MenuItem>
                                            <MenuItem onClick={handleCloseMenuList}>My account</MenuItem>
                                            <MenuItem onClick={handleCloseMenuList}>Logout</MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                    </Grow>
                                )}
                                </Popper>



                            {/*MenuList end*/}
                            
                            
                       
                        
                        </Grid>

                        </Grid>
                    </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                    </nav>
                    {/*Dashboard content*/}
                    <main  style={{backgroundColor: grey[100]}}  className={classes.content} >
                   
                    
                    <div className={classes.toolbar} />
                        <div>
                          {/* Flowdiagram content goes here ------------------------------------------------------------------------*/}

                            <ReactFlowProvider>
        
                                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                                        <ReactFlow
                                            edgeTypes={edgeTypes}
                                            nodeTypes={nodeTypes}
                                            elements={elements}
                                            onConnect={onConnect}
                                            onElementClick={onElementClick}
                                            onElementsRemove={onElementsRemove}
                                            onLoad={onLoad}
                                            onDrop={onDrop}
                                            onDragOver={onDragOver}
                                            style={graphStyles}
                                            
                                        >
                                            <Controls />
                                        </ReactFlow>
                                    
                                    </div>
                                    <Grid container style={{backgroundColor: grey[500]}} >
                                            <Sidebar />
                                            <label>label:</label>
                                                    <input
                                                        value={nodeName}
                                                        onChange={(evt) => setNodeName(evt.target.value)}
                                                    />
                                                    <label>label:Mass</label>
                                                    <input
                                                        value={nodeMass}
                                                        onChange={(evt) => setNodeMass(evt.target.value)}
                                                    />
                                                    <label>label:Energy</label>
                                                    <input
                                                        value={nodeEnergy}
                                                        onChange={(evt) => setNodeEnergy(evt.target.value)}
                                                    />

                                    </Grid>
                            </ReactFlowProvider>
                                                    
                         
                        </div>

                    </main>
                    {/*Dashboard content*/}
                   
                </div>
                )
            );
        
    
}


export default Simulation