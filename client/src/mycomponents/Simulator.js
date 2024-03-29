import React, { useState, useRef, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Handle, 
  updateEdge,
  
  MiniMap
} from 'react-flow-renderer';
import UnitTable from "./unitTable"

import Sidebar from './sidebar';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import AppBar from "@material-ui/core/AppBar";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from "axios"
import PropTypes from 'prop-types';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import User from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import StreamsTable from "./streamsTable"
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



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    tabContent: {
        height: 400,
        width: 450
    },
    tabContentSpacing: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    rootTabs: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
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
    },
    break: {
        breakK:"2"




    },





    appBar2: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
      title2: {
        flexGrow: 1,
      },
      hide: {
        display: 'none',
      },
      drawer2: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper2: {
        width: drawerWidth,
      },
      drawerHeader2: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },

}))




//-----------------------------------------For the flow diagram
const initialElements = [
    
    
  ];
  let id = 0;
  const getId = () => `Unit-${id++}`;
//-----------------------------------------End of for the flow diagram

const Simulation = (props) => {

    const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0();


  

   
        
            const { window } = props;
            const classes = useStyles();
            const theme = useTheme();
            const [mobileOpen, setMobileOpen] = React.useState(false);
            const [open, setOpen] = React.useState(false);
            const [open2, setOpen2] = React.useState(false);//Second drawer
            const [projectName,setProjectName] = React.useState()

//-----------------------------------------------------------------------------------------------------------Second drawer code
const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
//-----------------------------------------------------------------------------------------------------------Second drawer code end
            

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
  const [unitTable,setUnitTable] = useState()
  const [sourceStream, setSourceStream] = useState()
  const [targetStream,setTargetStream] = useState()



  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));
  const onConnect = (params) => {
    //Write something here that does a calculation on params.sourceHandle use data.text or data.whatever
    setSourceHandle(JSON.parse(params.sourceHandle))
    setTargetId(params.target)
    setSourceStream(params.source.split("-")[1])
    
    setTargetStream(parseInt(params.source.split("-")[1])-1)

    

    console.log("This is the params variable created when onConnect runs: ",params)
    setElements((els) => addEdge({ ...params, label:`${params.target.split("-")[1]}`,type:"smoothstep", animated: true, style: { stroke: '#000' },  }, els) )

    
    console.log("These are all the elements:  ",elements)


    axios.post("/api/Streams",{unitName:JSON.parse(params.sourceHandle).label,streamSource:params.source,streamTarget:params.target,rows:[]}).then(results=>{
      console.log("The data was successfully posted to the endpoint /api/unitTable/:id :",results)

      axios.get("/api/Streams/"+JSON.parse(params.sourceHandle).label).then(results2=>{
          console.log("This is the result from the axios get request to the /api/Streams/:id endpoint: ",results2)
          
          
      }).catch(err2=>{
          console.log("This is the error message that was recieved from the /api/unitTable endpoint:",err2)
          
      })

      
    }).catch(err=>{
        console.log("There was an error with the post request to the /api/unitTable/:id endpoint: ",err)
    })



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

  const [clickedE,setClicked] = React.useState(false)
  //---------------------------------------useEffect for editing data in the node
  const onElementClick = (event, element) => {
    console.log('This is the click element: ', element.data.label)
    //make an axios get request for table information. If no information exists. Make an axios post request with the current rows variable and the element data label
    axios.get("/api/unitTable/"+element.data.label).then(results=>{
        console.log("This is the result from the axios get request to the /api/unitTable/:id endpoint simulator: ",results)
        setUnitTable(results)
        setClicked(true)
        console.log("This is the uniTable variable: ",unitTable)
        
        
    }).catch(err=>{
        console.log("This is the error message that was recieved from the /api/unitTable endpoint:",err)
        
        setUnitTable([])
        /*
        axios.post("/api/unitTable/",{unitName:element.data.label, rows:rows}).then(results=>{
            console.log("The post query was successfully made: ", results)
        }).catch(err=>{
            console.log("There was an error with the post to the /api/unitTable endpoint: ",err)
        })*/
    })


    

    //----------------------------------------------------------


    setElementClickedId(element.id)
    setUnitTable()
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
  const graphStyles = { width: "100%", height: "400px" };
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
      data: { label: `${typeO.name} (Unit-${id})`,text:"all the info here" },
      
    };
    
    //console.log("This is the current id after newNode: ", id)
    //console.log("This is the newEdgeId before newEdge: ",newEdgeId)
    
    
  
    //console.log("This is the current id after newEdge: ", id)
    //console.log("THis is the newEdge object: ", newEdge)
    //console.log("This is the newNode object: ", newNode)
    setElements((es) => es.concat(newNode));
    
    //console.log("This is the new initialelements array: ",elements)
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
        <Handle type="target" position="top" style={{ borderRadius: 0 }} />
        <div>{data.label}</div>
        <Handle
          type="source"
          position="right"
          id={JSON.stringify(data)}
          style={{ borderRadius: 0 }}
        />
        <Handle
          type="source"
          position="bottom"
          id="b"
          style={{  borderRadius: 0 }}
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

//----------------------------------------------------------------------------------------------------Tabs for property data info

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currencies = [
    {
      value: 'Celsius',
      label: 'C',
    },
    {
      value: 'Farenheit',
      label: 'F',
    },
    {
      value: 'Kelvin',
      label: 'K',
    },
  
  ];

  const [temperature, setTemperature] = React.useState('Celsius');

  const handleChangeTemperature = (event) => {
    setTemperature(event.target.value);
  };

  
  const [Pressure, setPressure] = React.useState('Celsius');

  const handleChangePressure = (event) => {
    setPressure(event.target.value);
  };
  
//----------------------------------------------------------------------------------------------------End of Tabs for property data info
            
            

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




            //-----------------------------------------Chart tabs functions and data

           
              
             
            //-----------------------------------------Chart tabs end


            //-----------------------------------------Data xgrid
         

            
            //-----------------------------------------End of data xgrid

            
           
            

            
            
            const drawer = (
              <div>
                
                <div className={classes.toolbar} />
              
                <Divider />
                <List>
                  {['Saved Projects', 'New Project', 'Components', 'Methods'].map((text, index) => (
                    <>
                        {text==="New Project"? (
                            <>
                            <ListItem button key={text}  component={Link} to="/NewProject" >
                                
                               


                                <ListItemText primary={text} /> 
                                
                                
                                
                            </ListItem>
                            </>
                        ):
                        (
                            <ListItem button key={text}  >
                                
                               


                                <ListItemText primary={text} /> 
                                
                                
                                
                            </ListItem>
                            
                        )}
                        
                        
                    </>
                    
                        
                    ))}
                </List>
                    

              </div>
            );

          
            const container = window !== undefined ? () => window().document.body : undefined;

            if(isAuthenticated){
              axios.get("/api/User/"+JSON.stringify({name:user.name,userId:user.sub})).then(results=>{
                //console.log("This is the user data: ", results)
                //console.log("This is the project name: ",results.data.newProject[results.data.newProject.length-1].newProjectName)
                setProjectName(results.data.newProject[results.data.newProject.length-1].newProjectName)
              })
              .catch(err=>{
                console.log("There was an err with the request: ",err)
              })
            }
           
            return (
                
                isAuthenticated&&(
                    
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
                        Simulator
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
                                            <MenuItem onClick={()=>logout()}>Logout</MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                    </Grow>
                                )}
                                </Popper>

                                {/*Code for opening second drawer*/}
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerOpen}
                                    className={clsx(open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                {/*Code for opening second drawer end */}



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


                    {/*Second drawer to the right */}
                       {/**/} 
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="right"
                            open={open}
                            classes={{
                            paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                            </div>
                            <Divider />
                            <div className="description" style={{marginBottom:"10px"}}>Process Units:</div>
                            <Sidebar/>

                            <Divider />
                        </Drawer>
                    {/*End of second drawer to the right */}
                    </nav>



                    {/*Dashboard content*/}
                    <main  style={{backgroundColor: grey[20]}}  className={classes.content} >
                   
                    
                    <div className={classes.toolbar} />
                        <div>
                          {/* Flowdiagram content goes here ------------------------------------------------------------------------*/}

                            <ReactFlowProvider>
        
                                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                                        <ReactFlow
                                           
                                            
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
                                            <Typography variant="h6" style={{color: grey[600]}}>
                                              {projectName}
                                            </Typography>
                                            <Controls />
                                            <MiniMap
                                            nodeColor={(node) => {
                                                switch (node.type) {
                                                case 'input':
                                                    return 'red';
                                                case 'default':
                                                    return '#00ff00';
                                                case 'output':
                                                    return 'rgb(0,0,255)';
                                                default:
                                                    return '#eee';
                                                }
                                            }}
                                            nodeStrokeWidth={3}
                                            />
                                        </ReactFlow>
                                    
                                    </div>
                                    <Grid container style={{backgroundColor: grey[500]}} >
                                           {/*
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
                                            */}

                                    </Grid>
                            </ReactFlowProvider>
                                                    
                         
                        </div>

                        {/*Tabs for property data */}
                        <div className={classes.rootTabs}>
                            <AppBar position="static"  style={{backgroundColor:grey[400]}} >
                                <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                >
                                <Tab label="Specifications" {...a11yProps(0)} />
                                {/*<Tab label="Calculating Pressure" {...a11yProps(1)} />
                                <Tab label="Calculating Enthalpy" {...a11yProps(2)} />
                                <Tab label="Calculating Physical Properties" {...a11yProps(3)} />
                                <Tab label="Item Five" {...a11yProps(4)} />
                                <Tab label="Item Six" {...a11yProps(5)} />
                                <Tab label="Item Seven" {...a11yProps(6)} />*/}
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <Grid container justify="left" alignItems="center">
                                    
                                           {/*Table goes here 
                                             
                                           */}

                                    {unitTable && (
                                        <>
                                        <UnitTable unitname={nodeName} source={sourceStream} target={targetStream} project={projectName} clicked={clickedE} unitTable={unitTable}/>
                                        <StreamsTable unitname={nodeName} source={sourceStream} target={targetStream} project={projectName}/>
                                        </>
                                    )}
                                           
                                </Grid>
                            </TabPanel>
                            {/*<TabPanel value={value} index={1}>
                               Raults Law
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Clausius-Claperyon
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                Item Four
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                Item Five
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                Item Six
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                Item Seven
                            </TabPanel>*/}
                        </div>
                        {/*End of Tabs for property data */}

                    </main>
                    {/*Dashboard content end*/}
                   
                </div>
                )
            );
        
    
}


export default Simulation