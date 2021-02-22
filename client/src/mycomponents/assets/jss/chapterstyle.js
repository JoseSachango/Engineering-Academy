import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const drawerWidth = 500;
const theme = createMuiTheme({
    typography: {
     
      h7: {
        fontWeight: 1000,
      
      },
  
    },
  });

const styles = {
    root: {
        display: 'flex',
      },
      list: {
          width: 250,
        },
      fullList: {
          width: 'auto',
      },
      courseNotes:{
          width: "100%",
          
      },
      courseNotes2:{
          width: "100%",
          height: 500
      },
      nextExercise:{
          marginTop: "70px",
          marginBottom: "50px"
      },
      answer: {
          '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
            marginLeft:"20px"
          },
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
}


export default styles