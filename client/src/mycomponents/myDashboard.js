import React from "react";
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
    toolbar: theme.mixins.toolbar,
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
      marginBottom: "-30px",
      background: "red",
      width: 300
    },
    cardcontent:{
      marginTop: "30px"
    }
}))


const Mydashboard = (props) => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();
    

   
        
            const { window } = props;
            const classes = useStyles();
            const theme = useTheme();
            const [mobileOpen, setMobileOpen] = React.useState(false);
            const [open, setOpen] = React.useState(false);
            
            

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
                var data = {
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

            
           
            

            
            
            const drawer = (
              <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                  {['Dashboard', 'Course', 'Tables', 'Practice',"PFD"].map((text, index) => (
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
                                            <ListItemText primary="Chemical Processes" />
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
                                   <User/>
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
                    <main className={classes.content}>
                   
                    
                    <div className={classes.toolbar} />
                        <div>
                            <Grid container>
                                <Grid item sm={4}>
                                    <ChartistGraph data={data} options={options} type={type} />
                                </Grid>
                                
                            </Grid>
                            <h1>Hello world</h1>
                            <Grid container>
                                    <Grid item >
                                      <Paper elevation={3} className={classes.cardheader} >
                                        Hello World
                                      </Paper>
                                     
                                    </Grid>
                            </Grid>
                            <Card className={classes.card} >
                                
                               
                                <CardMedia
                                    className={classes.media}
                                    image= "../../components/DocumentationExperiment/assets/img/AmineTreatingPFD.png"
                                    title="Paella dish"
                                />
                                <CardContent className={classes.cardcontent}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                    <ShareIcon />
                                    </IconButton>
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
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                         
                        </div>

                    </main>
                    {/*Dashboard content*/}
                   
                </div>
                )
            );
        
    
}


export default Mydashboard