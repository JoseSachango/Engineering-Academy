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
import NotesIcon from '@material-ui/icons/Notes';
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
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import styles from "./assets/jss/chapterstyle"

const theme = createMuiTheme({
    typography: {
     
      h7: {
        fontWeight: 1000,
      
      },
  
    },
  });




const drawerWidth = 500;

const useStyles = makeStyles(styles);

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



const ChapterTemplate = (props) =>{

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

    //-------------------------------DrawerTemporary
    const [stateDrawer, setStateDrawer] = React.useState({
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setStateDrawer({ ...stateDrawer, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['placeholder', 'placeholder'].map((text, index) => (
              <ListItem button key={text}>
                {/*Import all the notes stored in the database in a list with the note titles 
                displayed. When you click on the notes it should diplay on the very right hand panel
                Turn of note taking functionality when you don't need it. */}
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    //-------------------------------DrawerTemporaryEnd

    //-------------------------------TextArea
    const [valueTextArea, setValueTextArea] = React.useState('Controlled');

    const handleChangeTextArea = (event) => {
      setValueTextArea(event.target.value);
    };
    //-------------------------------TextAreaEnd
    


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
                             
                                {/*
                                    <IconButton aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                 */}
                              <IconButton aria-label="show 4 new mails" color="inherit">
                              <div>
                                {['right'].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                    <NotesIcon onClick={toggleDrawer(anchor, true)}/>
                                    <Drawer anchor={anchor} open={stateDrawer[anchor]} onClose={toggleDrawer(anchor, false)}>
                                        {list(anchor)}
                                    </Drawer>
                                    </React.Fragment>
                                ))}
                              </div>
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
                   {props.title}
                </Typography>
                <Typography paragraph  className={classes.drawercontent}>
                   {props.opening}

                   {props.openingEquation1 && (

                    <Grid container justify="center">
                        <Typography paragraph  className={classes.drawercontent}>
                        
                                        
                        {/*Example equation */}
                            
                                    {props.openingEquation1 && (

                                            <div >
                                                <MathJax.Context input='ascii'>
                                                    <div >
                                                    
                                                            <MathJax.Node inline>{props.openingEquation1}</MathJax.Node> 
                                                        
                                                    </div>
                                                </MathJax.Context>
                                            </div>

                                    )}

                                    
                                    
                                    
                        </Typography>
                    </Grid>

                   )}
                   

                   {props.openingEquation2 && (

                    <Grid container justify="center">
                        <Typography paragraph  className={classes.drawercontent}>
                        
                                        
                        {/*Example equation */}
                            
                                    {props.openingEquation2 && (

                                            <div >
                                                <MathJax.Context input='ascii'>
                                                    <div >
                                                    
                                                            <MathJax.Node inline>{props.openingEquation2}</MathJax.Node> 
                                                        
                                                    </div>
                                                </MathJax.Context>
                                            </div>

                                    )}

                                    
                                    
                                    
                        </Typography>
                    </Grid>

                    )}
                    
                </Typography>
                <Typography paragraph  className={classes.drawercontent}>
                    {props.main}
                    <Grid container justify="center">
                        <Typography paragraph  className={classes.drawercontent}>
                        
                                        
                        {/*Example equation */}
                            {props.table && (
                                props.table
                            )
                            }
                                    {props.equation1 && (

                                            <div >
                                                <MathJax.Context input='ascii'>
                                                    <div >
                                                    
                                                            <MathJax.Node inline>{props.equation1}</MathJax.Node> {props.text}
                                                        
                                                    </div>
                                                </MathJax.Context>
                                            </div>

                                    )}

                                    
                                    
                                    
                        </Typography>
                    </Grid>
                    {/*Content */}
                </Typography>
              
                <Grid container justify="center">
                    <Typography paragraph  className={classes.drawercontent}>
                    
                                    {/*Content */}
                                    {props.equation2 && (

                                        <div >
                                            <MathJax.Context input='ascii'>
                                                <div >
                                                
                                                        <MathJax.Node inline>{props.equation2}</MathJax.Node> 
                                                    
                                                </div>
                                            </MathJax.Context>
                                        </div>

                                    )}
                                    
                                
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content */}
                                   {props.equation3 && (

                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{props.equation3}</MathJax.Node> 
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>

                                    )}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content*/}
                                   {props.main2 && (
                                       props.main2
                                   )}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content */}
                                   {props.main2equation && (
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{props.main2equation}</MathJax.Node> 
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                   )}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content*/}
                                   {props.main3 && (
                                       props.main3
                                   )}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content */}
                                   {props.main3equation && (
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{props.main3equation}</MathJax.Node> 
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                   )}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content */}
                                   {props.main3equation1 && (
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{props.main3equation1}</MathJax.Node> 
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                   )}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography paragraph className={classes.drawercontent}>
                                   {/*Content */}
                                   {props.main3equation2 && (
                                    <div >
                                        <MathJax.Context input='ascii'>
                                            <div >
                                            
                                                    <MathJax.Node inline>{props.main3equation2}</MathJax.Node> 
                                                
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                   )}
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
                        label={props.instructions}
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
                        <Button variant="outlined" color="primary"  component={Link} to={props.endpoint} >
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

                           
                               
                                    


                                
                            
                            <Typography paragraph >
                                
                                {/*Content */}
                            </Typography>
                            {/*<form className={classes.answer} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="answer" variant="outlined"  size="small"/>
                            </form>*/}
                          
                           

                                
                            </Paper>
                        </Grid>
                        <Grid item sm={6}>
                            <Paper  borderRight={1} elevation={0} style={{ height: 1000, backgroundColor: grey[100]}}>
                            <Typography paragraph  variant="h5">
                                 
                                <form className={classes.courseNotes} noValidate autoComplete="off">
                                <div>
                                   
                                    <TextField
                                    id="standard-textarea"
                                    label="Note Title:"
                                    placeholder=""
                                    onChange={handleChangeTextArea}
                                    multiline
                                    className={classes.courseNotes}

                                    />
                                  
                                </div>
                              
                                </form>
                                <form  noValidate autoComplete="off" >
                                <div>
                                   
                                   {/*
                                    <TextField
                                    id="1"
                                    label=""
                                    placeholder=""
                                    onChange={handleChangeTextArea}
                                    multiline
                              
                                    className={classes.courseNotes2}
                                    inputProps={{ 'aria-label': 'naked' }}

                                    />
                                    */}
                                    <InputBase
                                    className={classes.margin}
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                    multiline
                                    className={classes.courseNotes2}
                                    style={{height:50}}
                                    
                                    />
                                  
                                </div>
                              
                                </form>
                               
                            </Typography>
                            
                            <Grid conatiner>
                                <Grid item>

                                </Grid>
                            </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
              {/*Main content ends */}
              
            </main>
            
                    
          </div>
          
        )
    )
}


export default ChapterTemplate 