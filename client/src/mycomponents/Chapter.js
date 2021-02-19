import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Revenue from '@material-ui/icons/AccountBalance'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForward from '@material-ui/icons/ArrowForward'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { teal,grey,yellow,red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardTemplateP from "./CardTemplateProgress"
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Fab from '@material-ui/core/Fab';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MathJax from 'react-mathjax2'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const theme = createMuiTheme({
    typography: {
     
      h7: {
        fontWeight: 1000,
      
      },
  
    },
  });
  




const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    nextExercise:{
        marginTop: "70px",
        marginBottom: "50px"
    },
    column1:{
        marginLeft: "5px",
        marginTop: "5px",
        marginRight: "20px"
    },
    typography:{
        marginLeft: "20px"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawercontent:{
        marginLeft: "20px",
        marginTop: "40px",
        marginRight: "20px",
        marginBottom: "20px"
    },
    drawercontentEquations:{
       marginLeft: "100px",
       justifyContent: "center"
    },

    drawercontentIns:{
        width: "100%"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));


//--------------------------Border default properties
const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
  };
//--------------------------Border default end

//---------------------------Checkbox
const GreenCheckbox = withStyles({
    root: {
    color: green[400],
    '&$checked': {
        color: green[600],
    },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
//-----------------------------Checkbox end




const Chapter = () =>{

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [progress, setProgress] = React.useState(10);
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();
    const [value, setValue] = React.useState('recents');
    //-------------------------------------------------
    const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
    const ascii2 = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
    const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$ $$ ${ascii} $$`
    const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`
    //-------------------------------------------------

    //-------------------------------Bottom navigation
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    //--------------------------------Bottom navigation

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );

    //------------------------------Checkbox 


        const [state, setState] = React.useState({
            checkedA: false,
            checkedB: false,
            checkedF: false,
            checkedG: false,
          });
        
          const handleChangeCheckbox = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
          };
        
    //------------------------------Checkbox end
    


    return (
        !isAuthenticated&&(
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <Grid container>
                    <Grid item sm={8}>
                    <Typography variant="h6" noWrap>
                        Engineering Academy
                    </Typography>
                    </Grid>
                    <Grid item sm={4}>
                            <Grid container  direction="row" justify="flex-end">
                                {/*Search box */}
                             
                              <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                              </IconButton>
                              <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                              </IconButton>
                              <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                component={Link} to="/ChemProCourse"
                                >
                                <AccountCircle  />
                              </IconButton>
                            </Grid>
                    </Grid>
                </Grid>
            
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <Typography variant="h4"  className={classes.drawercontent}>
                   Units and Dimensions
                </Typography>
                <Typography paragraph  className={classes.drawercontent}>
                    Chemical engineers work in a variety of fields and are responsible for tackling a wide range of problems. Normally these problems involve 
                    turning some sort of raw material, like crude oil, into desired products like gasoline. That being said, the 
                    fundamental techniques for solving most of these problems aren't all that different. Therefore, 
                    In this section we start by focusing on the fundamentals, namely units. Understanding units builds the groundwork for 
                    tackling more advanced chemical engineering problems.
                    
                </Typography>
                <Typography paragraph  className={classes.drawercontent}>
                    Any quantity that's measured or counted has a numerical value(lets say 2.47) and a unit (whatever there are 2.47 of). 
                    Together they are written in the following format: 
                    <Grid container justify="center">
                        <Typography paragraph  className={classes.drawercontent}>
                        
                                        
                        2 meters, 1/3 seconds, 4.39 kilograms, 5 gold rings
                                    
                                    
                        </Typography>
                    </Grid>
                    Dimensions are properties that can be measured such as length, or time and measureable units 
                    (as opposed to countable units) are values of dimensions that have been predefined by law, 
                    custom or convetion. For example, grams for mass, or seconds for time.
                </Typography>
                <Typography paragraph  className={classes.drawercontent}>
                  Units are treated like variables when quantities are added, substracted, multiplied, or divided. The rule is that the numerical
                  values of two quantities can only be added or subtracted if the units are the same. However, numerical values of two quantities can always 
                  be combined by multiplication or division.
                              
                </Typography>
                <Grid container justify="center">
                    <Typography paragraph  className={classes.drawercontent}>
                    
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                <MathJax.Node inline>{'3N * 4m = 12N*m'}</MathJax.Node>
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                
                                
                                
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{'(5km) / (2h) = (2.5km)/h'}</MathJax.Node>
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div>
                                            
                                                    <MathJax.Node inline>{'7((km)/h)*4h = 28km'}</MathJax.Node>
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{'3m*4m = 12m^2'}</MathJax.Node>
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                    </Typography>
                </Grid>
                <Grid container alignItems="center" >
                    <Grid item sm={12}>
                        <Paper elevation={0}  className={classes.drawercontentIns} style={{ height: 45, backgroundColor: grey[100]}}>
                        <ThemeProvider theme={theme}>
                            <Typography paragraph className={classes.typography} >
                                Instructions
                            </Typography>
                        </ThemeProvider>
                        </Paper>
                    </Grid>
                </Grid>
                <Typography paragraph  className={classes.drawercontent}>

                    <FormControlLabel
                        control={<GreenCheckbox checked={state.checkedG} onChange={handleChangeCheckbox} name="checkedG" />}
                        label="Solve the equations in the terminal"
                    />
                   
                </Typography>
                

                <Grid container className={classes.nextExercise} >
                    <Grid item sm={6}>
                        <Grid container justify="center">
                        <Button variant="outlined" color="primary">
                            Back
                        </Button>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container justify="center">
                        <Button variant="outlined" color="secondary">
                            Next
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                
              </div>
            </Drawer>
            <main className={classes.content}>
              <Toolbar />
              {/*Main content starts here */}
                    <Grid container >
                        <Grid item sm={6}>
                            <Paper className={classes.column1} borderRight={1} elevation={0} style={{ height: 1000, backgroundColor: grey[100]}}>

                                <MathJax.Context
                                    input='ascii'
                                    onLoad={ () => console.log("Loaded MathJax script!") }
                                    onError={ (MathJax, error) => {
                                        console.warn(error);
                                        console.log("Encountered a MathJax error, re-attempting a typeset!");
                                        MathJax.Hub.Queue(
                                        MathJax.Hub.Typeset()
                                        );
                                    } }
                                    script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
                                    options={ {
                                        asciimath2jax: {
                                            useMathMLspacing: true,
                                            delimiters: [["$$","$$"]],
                                            preview: "none",
                                        }
                                    } }
                                >
                                    <MathJax.Text text={ content }/>
                                    

                                </MathJax.Context>

                                <div>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            This is an inline formula written in AsciiMath: <MathJax.Node inline>{ ascii2 }</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                </div>

                                <div>
                                    <MathJax.Context input='tex'>
                                        <div>
                                            This is an inline math formula: <MathJax.Node inline>{'a = b'}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                </div>

                            
                            <Typography paragraph>
                                In here create some sort of interactive activity based on the instructions found in the drawer.
                                Try a draggable ven diagramm where you have to place words in the right spaces......On the nav have a section to where you can up a notes drawer coming from the right of the page.........
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                donec massa sapien faucibus et molestie ac.
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item sm={6}>
                            <Paper  borderRight={1} elevation={0} style={{ height: 1000, backgroundColor: grey[100]}}>
                            <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                donec massa sapien faucibus et molestie ac.
                            </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
              {/*Main content ends */}
              
            </main>
            
                    
          </div>
          
        )
    )
}


export default Chapter 