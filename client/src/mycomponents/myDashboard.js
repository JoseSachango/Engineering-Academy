import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import AppBar from "@material-ui/core/AppBar";
import AppBar from '@material-ui/core/AppBar';
import RandomChart from "./RandomChart"
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import axios from "axios"
import IconButton from '@material-ui/core/IconButton';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Energy from '@material-ui/icons/Whatshot'
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
import Production from '@material-ui/icons/Build'
import NewTable from "./newTable"
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
import { red,green,blue } from '@material-ui/core/colors';
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


import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  LineSeries,
  PieSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { ValueScale } from '@devexpress/dx-react-chart';
import ChemProCourse from "./ChemProCourse";

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


const Mydashboard = (props) => {

    const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0();


    

    


    const ChangeLocation = () =>{
      return(
        alert("Button is working")
      )
    }
    

   
        
            const { window } = props;
            const classes = useStyles();
            const theme = useTheme();
            const [mobileOpen, setMobileOpen] = React.useState(false);
            const [open, setOpen] = React.useState(false);
            const [valueTabs, setValueTabs] = React.useState(0);

            const handleChangeTabs = (event, newValue) => {
              setValueTabs(newValue);
            };
            
            

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
                var data1 = {
                    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
                    series: [
                    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
                    ]
                };

                var options = {
                    high: 10,
                    low: -10,
                    axisX: {
                      labelInterpolationFnc: function(value, index) {
                        return index % 2 === 0 ? value : null;
                      }
                    }
                  };
              
                  var type = 'Bar'

                  //------------------------New chart data
                  const data = [
                    { argument: 1, value: 10 },
                    { argument: 2, value: 20 },
                    { argument: 3, value: 30 },
                  ];
                  const data3 = [
                    { argument: 1, value: 1 },
                    { argument: 2, value: 2 },
                    { argument: 3, value: 3 },
                  ];

                  //------------------------







                  //-------------------------------New chart data2
                  const dataObject = {
                    data: [
                      { month: 'HeatX', sale: 50, total: 987 },
                      { month: 'Distillation', sale: 100, total: 3000 },
                      { month: 'Pump', sale: 30, total: 1100 },
                      { month: 'Valve', sale: 107, total: 7100 },
                      { month: 'Tank', sale: 95, total: 4300 },
                      { month: 'Production', sale: 150, total: 7500 },
                    ],
                  };

                
                const { data: chartData } = dataObject;


                const dataObject2 ={
                  data2 : [
                    { country: 'Russia', area: 12 },
                    { country: 'Canada', area: 7 },
                    { country: 'USA', area: 7 },
                    { country: 'China', area: 7 },
                    { country: 'Brazil', area: 6 },
                    { country: 'Australia', area: 5 },
                    { country: 'India', area: 2 },
                    { country: 'Others', area: 55 },
                  ]
                }

                const {data2: chartData2} = dataObject2
                  //----------------------------------




           //---------------------------End of chart info 
           //---------------------------Card with header functionality
           const [expandedCard, setExpandedCard] = React.useState(false);

            const handleExpandClickCard = () => {
                setExpandedCard(!expandedCard);
            };
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

            function TabPanel(props) {
              const { children, value, index, ...other } = props;
            
              return (
                <div
                  role="tabpanel"
                  hidden={value !== index}
                  id={`scrollable-force-tabpanel-${index}`}
                  aria-labelledby={`scrollable-force-tab-${index}`}
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
           
            
              
              function a11yProps(index) {
                return {
                  id: `scrollable-force-tab-${index}`,
                  'aria-controls': `scrollable-force-tabpanel-${index}`,
                };
              }

              const titleStyle = { margin: 'auto' };
              const TitleText = props => <Title.Text {...props} style={titleStyle} />;
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
                  {['Dashboard', 'Course', 'Simulator', 'Report Builder'].map((text, index) => (
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
                                        <ListItem button className={classes.nested} component={Link} to="/ChemProCourse">
                                            <ListItemIcon>
                                            <StarBorder />
                                            </ListItemIcon>
                                            
                                              <ListItemText primary="Chemical Processes" component={Link} to="/ChemProCourse"  />
                                            
                                           
                                           
                                        </ListItem>
                                     
                                        </List>
                                </Collapse>
                            </>
                        ): text==="Simulator" ?
                        (
                            <ListItem button key={text} component={Link} to="/NewProject" >
                                
                                <ListItemIcon>{sidebarIcons[text] ?  sidebarIcons[text] : null}</ListItemIcon>

                                
                                  <ListItemText primary={text} component={Link} to="/Simulator" /> 
                                
                                
                                
                                
                            </ListItem>
                            
                        ):

                        (
                            <ListItem button key={text}  >
                                
                                <ListItemIcon>{sidebarIcons[text] ?  sidebarIcons[text] : null}</ListItemIcon>


                                <ListItemText primary={text} /> 
                                
                                
                                
                            </ListItem>
                            
                        )

                        
                        }
                        
                        
                    </>
                    
                        
                    ))}
                </List>
                    

              </div>
            );

          
            const container = window !== undefined ? () => window().document.body : undefined;
            console.log(sidebarIcons.Book)

            if(isAuthenticated){

              axios.get("/api/User/",{name:user.name,userId:user.sub}).then(results=>{
                console.log("The axios get request to the /api/User/:id endpoint was made succefully: ",results)
                console.log("This is the length of results data: ", results.data.length)
                if(results.data.length <1) {
                  axios.post("/api/User",{user:{name:user.name,userId:user.sub}}).then(results=>{
                    console.log("The data was successfully posted to the endpoint /api/User :",results)

                  
                
                  }).catch(err=>{
                      console.log("There was an error with the post request to the /api/User endpoint: ",err)
                  })
                }
                //axios.get("/api/User/").then(results2=>{console.log("this is all of the users: ",results2)}).catch(err=>{console.log('There was an error')})
                }).catch(err=>{

                  console.log("There was an error with the axios get request to the /api/User endpoint: ",err)
                  

                    axios.post("/api/User",{user:{name:user.name,userId:user.sub}}).then(results=>{
                      console.log("The data was successfully posted to the endpoint /api/User :",results)

                    
                  
                    }).catch(err=>{
                        console.log("There was an error with the post request to the /api/User endpoint: ",err)
                    })

                })

            }

            
            return (
                
                isAuthenticated&&(
                    
                <div className={classes.root}>
                    {
                      /*axios.get("/api/User").then(results=>{console.log(results)}).catch(err=>{console.log(err)})*/
                      
                      /*
                      axios.get("/api/User"+"hello").then(results=>{
                      console.log("The axios get request to the /api/User endpoint was made succefully: ",results)
                      }).catch(err=>{
                        console.log("There was an error with the axios get request to the /api/User endpoint: ",err)

                          axios.post("/api/User",{user:"user",units:[],streams:[],notes:[],newProjects:[]}).then(results=>{
                            console.log("The data was successfully posted to the endpoint /api/User :",results)

                          
                        
                          }).catch(err=>{
                              console.log("There was an error with the post request to the /api/User endpoint: ",err)
                          })

                      })*/
                    }
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
                                            <MenuItem onClick={()=>logout()}>Logout</MenuItem>
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
                          
                           <Grid container>
                              <Typography variant="h4"  style={{marginBottom:"20px", color: grey[600]}} gutterBottom>
                                {"Project Name"}
                              </Typography>
                           </Grid>
                           <Grid container>
                             <Grid item sm={4}>
                                    <Grid container>
                                            <Grid item >
                                              <Paper  elevation={3} className={classes.cardheader} style={{backgroundColor:green[500]}} >
                                                  <Revenue style={{ color: grey[50] }}/>
                                              </Paper>
                                            
                                            </Grid>
                                    </Grid>
                                    <Card className={classes.card} >
                                        
                                      
                                        <CardMedia
                                            className={classes.media}
                                            image= "../../components/DocumentationExperiment/assets/img/AmineTreatingPFD.png"
                                            title="Paella dish"
                                        />
                                        <Grid container>

                                              <Grid item sm={6}>

                                              </Grid>
                                              <Grid item sm={6}>
                                                    <CardContent className={classes.cardcontent}>
                                                      <Typography  variant="body2" color="textSecondary" component="p">
                                                      Revenue
                                                      </Typography>
                                                      <Typography className={classes.cardtitle} variant="body2" color="textSecondary" component="p">
                                                        $34,000
                                                      </Typography>
                                                  </CardContent>
                                              </Grid>
                                    
                                        </Grid>
                                      
                                        <Divider />
                                        <CardActions disableSpacing>
                                          
                                            <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expandedCard,
                                            })}
                                            onClick={handleExpandClickCard}
                                            aria-expanded={expandedCard}
                                            aria-label="show more"
                                            >
                                            <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={expandedCard} timeout="auto" unmountOnExit>
                                            <CardContent>
                                            <Typography paragraph>Content:</Typography>
                                            <Typography paragraph>
                                                
                                            </Typography>
                                            <Typography paragraph>
                                              
                                            </Typography>
                                            <Typography paragraph>
                                              
                                            </Typography>
                                            <Typography>
                                                
                                            </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                             


                             </Grid>
                              <Grid item sm={4}>

                                      <Grid container>
                                            <Grid item >
                                              <Paper  elevation={3} className={classes.cardheader} >
                                                  <Energy style={{ color: grey[50] }}/>
                                              </Paper>
                                            
                                            </Grid>
                                    </Grid>
                                    <Card className={classes.card} >
                                        
                                      
                                        <CardMedia
                                            className={classes.media}
                                            image= "../../components/DocumentationExperiment/assets/img/AmineTreatingPFD.png"
                                            title="Paella dish"
                                        />
                                        <Grid container>

                                              <Grid item sm={6}>

                                              </Grid>
                                              <Grid item sm={6}>
                                                    <CardContent className={classes.cardcontent}>
                                                      <Typography  variant="body2" color="textSecondary" component="p">
                                                      Energy
                                                      </Typography>
                                                      <Typography className={classes.cardtitle} variant="body2" color="textSecondary" component="p">
                                                        500 kcal
                                                      </Typography>
                                                  </CardContent>
                                              </Grid>
                                    
                                        </Grid>
                                      
                                        <Divider />
                                        <CardActions disableSpacing>
                                          
                                            <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expandedCard,
                                            })}
                                            onClick={handleExpandClickCard}
                                            aria-expanded={expandedCard}
                                            aria-label="show more"
                                            >
                                            <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={expandedCard} timeout="auto" unmountOnExit>
                                            <CardContent>
                                            <Typography paragraph>Content:</Typography>
                                            <Typography paragraph>
                                                
                                            </Typography>
                                            <Typography paragraph>
                                              
                                            </Typography>
                                            <Typography paragraph>
                                              
                                            </Typography>
                                            <Typography>
                                                
                                            </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    

                              </Grid>
                              <Grid item sm={4}>

                                        <Grid container>
                                              <Grid item >
                                                <Paper  elevation={3} className={classes.cardheader} style={{backgroundColor:blue[500]}}>
                                                    <Production style={{ color: grey[50] }}/>
                                                </Paper>
                                              
                                              </Grid>
                                      </Grid>
                                      <Card className={classes.card} >
                                          
                                        
                                          <CardMedia
                                              className={classes.media}
                                              image= "../../components/DocumentationExperiment/assets/img/AmineTreatingPFD.png"
                                              title="Paella dish"
                                          />
                                          <Grid container>

                                                <Grid item sm={6}>

                                                </Grid>
                                                <Grid item sm={6}>
                                                      <CardContent className={classes.cardcontent}>
                                                        <Typography  variant="body2" color="textSecondary" component="p">
                                                        Production
                                                        </Typography>
                                                        <Typography className={classes.cardtitle} variant="body2" color="textSecondary" component="p">
                                                          500 t/h
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                      
                                          </Grid>
                                        
                                          <Divider />
                                          <CardActions disableSpacing>
                                            
                                              <IconButton
                                              className={clsx(classes.expand, {
                                                  [classes.expandOpen]: expandedCard,
                                              })}
                                              onClick={handleExpandClickCard}
                                              aria-expanded={expandedCard}
                                              aria-label="show more"
                                              >
                                              <ExpandMoreIcon />
                                              </IconButton>
                                          </CardActions>
                                          <Collapse in={expandedCard} timeout="auto" unmountOnExit>
                                              <CardContent>
                                              <Typography paragraph>Content:</Typography>
                                              <Typography paragraph>
                                                  
                                              </Typography>
                                              <Typography paragraph>
                                                
                                              </Typography>
                                              <Typography paragraph>
                                                
                                              </Typography>
                                              <Typography>
                                                  
                                              </Typography>
                                              </CardContent>
                                          </Collapse>
                                      </Card>
                             

                              </Grid>
                           </Grid>


                           <Grid container>
                                    <Grid item sm={9}>
                                              <Grid container>
                                                  <Grid item sm={6}>
                                                      <Paper className={classes.chart3}>
                                                        <Chart
                                                          data={chartData}
                                                        >
                                                          <ValueScale name="sale" />
                                                          <ValueScale name="total" />

                                                          <ArgumentAxis />
                                                          <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
                                                          <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

                                                          <BarSeries
                                                            name="Energy"
                                                            valueField="sale"
                                                            argumentField="month"
                                                            scaleName="sale"
                                                          />

                                                        
                                                          <Title
                                                            text="Energy Use per Unit"
                                                            textComponent={TitleText}
                                                          />

                                                          <Legend />
                                                        </Chart>
                                                      </Paper>
                                                  </Grid>
                                                  <Grid item sm={5} style={{marginLeft:"50px"}}>
                                                      <Paper className={classes.chart3}>
                                                        <Chart
                                                          data={chartData2}
                                                        >
                                                          
                                                         

                                                          <PieSeries
                                                            valueField="area"
                                                            argumentField="country"
                                                          />

                                                        
                                                          <Title
                                                            text="Area of Countries"
                                                          />

                                                          <Legend />
                                                        </Chart>
                                                      </Paper>

                                                  </Grid>

                                              </Grid>
                                              <Grid container>
                                                  <Grid item sm={12}>
                                                      <NewTable />
                                                  </Grid>
                                              </Grid>

                                    </Grid>
                                    <Grid item sm={3}>
                                        <Paper elevation={3} style={{height:922,marginTop:"50px",marginLeft:"10px"}}>
                                          
                                        </Paper>
                                    </Grid>

                           </Grid>
                            
                            
                            
                              {/* 3rd chart */}
                               
                              {/*3rd chart end */}
                              {JSON.stringify(user)}
                              
                             
                              
                              
                            
                         
                        </div>

                    </main>
                    {/*Dashboard content*/}
                   
                </div>
                )
            );
        
    
}


export default Mydashboard