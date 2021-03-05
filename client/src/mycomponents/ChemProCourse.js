import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
import Home from '@material-ui/icons/Home'
import Dashboard from '@material-ui/icons/Dashboard'
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { teal,grey,yellow,red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import CardTemplateP from "./CardTemplateProgress"
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'



const theme = createMuiTheme({
  typography: {
   
    h4: {
      fontWeight: 1000,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    h5:{
      fontWeight: 1000,
      fontFamily: [
        'Arial',
      ].join(','),
    }

  },
});




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  progress:{
    width: 1000,
  },
  container:{
    marginBottom: "50px",
    marginTop: "50px"
  },
  banner:{
    height: 400
  },
  divider:{
    width: 1000,
    justify: "center"
  },
  button:{
    borderRadius: "5em"
  },
  banner2:{
    
    marginTop: "50px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



export default function ChemProCourse() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [progress, setProgress] = React.useState(10);
  const {loginWithRedirect,logout,isAuthenticated} = useAuth0();


  React.useEffect(() => {
    const timer = () => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }
    return () => {
      clearInterval(timer);
    };
  }, []);



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
      <MenuItem onClick={()=>logout()}>Logout</MenuItem>
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

  return (

    isAuthenticated&&(
            <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                  <Grid container>
                      <Grid item sm={1}>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                      </Grid>
                      <Grid item sm={7}>
                        <Grid container direction="row" justify="flex-start" alignItems="flex-end">
                          <Typography className={classes.title} variant="h6" noWrap>
                            Engineering Academy
                          </Typography>
                        </Grid>
                      </Grid>
                     
                     
                      <Grid item sm={4} >
                            <Grid container  direction="row" justify="flex-end">
                              <div className={classes.search}>
                                  <div className={classes.searchIcon}>
                                  <SearchIcon />
                                  </div>
                                  <InputBase
                                  placeholder="Search…"
                                  classes={{
                                      root: classes.inputRoot,
                                      input: classes.inputInput,
                                  }}
                                  inputProps={{ 'aria-label': 'search' }}
                                  />
                              </div>
                              <IconButton aria-label="show 4 new mails" color="inherit" component={Link} to="/">
                               
                                    <Dashboard/>
                               
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
                                >
                                <AccountCircle />
                              </IconButton>
                            </Grid>
                      </Grid>


                  </Grid>
                        
                       
                      
                       
                      
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          

          <Grid container >
            <Grid item sm={12} className={classes.banner}>
              <Paper>
                <Grid  style={{ height: 325, backgroundColor: teal[400]}} container justify="center" alignItems="center" direction="row">
                              
                             <Grid item>
                               <Grid container  container justify="center" alignItems="center" direction="row">
                               <ThemeProvider theme={theme}>
                                    <Typography  style={{color: grey[50], fontSize: '50px'}} variant="h4" >
                                      Chemical Processes
                                    </Typography>
                               </ThemeProvider>
                         
                               </Grid>
                               <Grid className={classes.banner2} container justify="center" alignItems="center" direction="row" >
                               <Button component={Link} to="/ChemProCourse/Chapter1" className={classes.button} variant="contained" color="primary" style={{ backgroundColor: yellow[400], color: grey[900]}} >
                                  Start 
                               </Button>
                              </Grid>
                             </Grid>
                               
                              

                             

                </Grid>

              </Paper>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item sm={12}>
                <Paper >
                  <Grid container style={{ height: 100}}>
                            <Grid item sm={2}>
                                    
                            </Grid>
                            <Grid item sm={4}>
                              <Grid container justify="flex-start" direction="row" alignItems="center" >
                                <Typography style={{color: grey[900]}} variant="h3">
                                  Progress
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item sm={3}>
                                  
                            </Grid>
                            <Grid item sm={3}>
                                  
                            </Grid>
                         
                   
                  </Grid>
                  <Grid container style={{ height: 200}} justify="center" direction="row" alignItems="center">
                    <div className={classes.progress}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Grid>
                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <ThemeProvider theme={theme}>
                              <Typography style={{color: grey[900]}} variant="h5">
                                1. Engineering Calculations:
                              </Typography>
                            </ThemeProvider>  
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>   
             
                  <Divider/>    

                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              2. Processes and Process Variables:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>

                  <Divider/>    

                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              3. Material Balances:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>  

                  <Divider/>    

                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              4. Single Phase Systems:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>  


                  <Divider/>    

                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              5. Multiphase Systems:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid> 

                  <Divider/>    

                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              6. Energy and Energy Balances:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>   

                   <Divider/>    
                  
                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              7. Balances on Nonreactive Processes:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid> 

                  <Divider/>    
                  
                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              8. Balances on Reactive Processes:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>

                  <Divider/>    
                  
                  <Grid container className={classes.container}>
                      <Grid item sm={7}>
                          <Grid container justify="center" direction="row" alignItems="center">
                            <Typography style={{color: grey[900]}} variant="h5">
                              . Balances on Transient Processes:
                            </Typography>
                          </Grid>
                      </Grid>
                      <Grid item sm={5}>
                        <CardTemplateP />  
                      </Grid>
                     
                  </Grid>                                                                                                   
              
                </Paper>
         
            </Grid>
          </Grid>

         

        </div>
    )

  );
}