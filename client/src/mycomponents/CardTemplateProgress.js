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
import { grey,red,yellow,green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';






const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    button:{
        borderRadius: "5em",
        marginLeft: "20px"
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
        maxWidth: 450
    },
    cardheader: {
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "0px",
      border: "0",
      marginBottom: "-110px",
      background: "transparent",
      width: 75,
      textAlign: 'center',
      height: "50px"
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
      fontSize: 20
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
      marginBottom: "-100px",
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





const CardTemplateProgress = (props) =>{

    const classes = useStyles()


//---------------------------Card with header functionality
  const [expandedCard, setExpandedCard] = React.useState(false);
  const [progress, setProgress] = React.useState(10);

  const handleExpandClickCard = () => {
      setExpandedCard(!expandedCard);
  };
 //---------------------------End of card with header

 //---------------------------circle progress function
 function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
 //---------------------------circle progress function end


 

    return(
        <div>
                            <Grid container>
                                    <Grid item >
                                      <Paper  elevation={0} className={classes.cardheader} >
                                          {/*<Revenue style={{ color: grey[50] }}/>*/}
                                          <CircularProgressWithLabel value={progress} />
                                      </Paper>
                                     
                                    </Grid>
                            </Grid>
                            <Card className={classes.card} style={{ backgroundColor: grey[200] }}>
                                
                               
                                <CardMedia
                                    className={classes.media}
                                    image= "../../components/DocumentationExperiment/assets/img/AmineTreatingPFD.png"
                                    title="Paella dish"
                                />
                                <Grid container>

                                      <Grid item sm={4}>

                                      </Grid>
                                      <Grid item sm={8}>
                                            <CardContent className={classes.cardcontent}>
                                              <Typography className={classes.cardtitle} variant="body2" color="textSecondary" component="p">
                                              Introduction to Engineering Calculations
                                              </Typography>
                                          </CardContent>
                                      </Grid>
                             
                                </Grid>
                              
                                <Divider />
                                <CardActions disableSpacing>
                                   
                                    {/*<Link to="/EngineeringCalculations/Units" role="button" className="btn btn-link">
                                           Start 
                                            
                                    </Link>*/}
                                    <Button component={Link} to="/ChemProCourse/Chapter1" className={classes.button} variant="contained" color="primary" style={{ backgroundColor: yellow[400], color: grey[900]}} >
                                        Start 
                                    </Button>
                                 
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
                                    
                                    <Link to="/EngineeringCalculations/Units" role="button" className="btn btn-link">
                                        <Typography paragraph>
                                            Lesson:  Units and dimensions
                                        </Typography>
                                        
                                    </Link>
                                    <Link to="/EngineeringCalculations/Units" role="button" className="btn btn-link">
                                        <Typography paragraph>
                                            Lesson: Force and weight
                                        </Typography> 
                                    </Link>
                                    <Link to="/EngineeringCalculations/Units" role="button" className="btn btn-link">
                                        <Typography paragraph>
                                            Lesson: Process data representation
                                        </Typography>             
                                    </Link>
                                    
                                    </CardContent>
                                </Collapse>
                            </Card>
        </div>
    )
}



export default CardTemplateProgress;