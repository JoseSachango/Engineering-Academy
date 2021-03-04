import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';


function createData(compounds, molesin, enthalpyin, molesout, enthalpyout,pressure,temperature,sizing,utilities,cost) {
  return {compounds, molesin, enthalpyin, molesout, enthalpyout,pressure,temperature,sizing,utilities,cost };
}


//rows variable be brought in using an 
const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3,7,7,8,9,0),
  createData('Donut', 452, 25.0, 51, 4.97,7,8,9,0),
  createData('Eclair', 262, 16.0, 24, 6.07,7,8,9,0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.07,7,8,9,0),
  createData('Gingerbread', 356, 16.0, 49, 3.97,7,8,9,0),
  createData('Honeycomb', 408, 3.2, 87, 6.57,7,8,9,0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.37,7,8,9,0),
  createData('Jelly Bean', 375, 0.0, 94, 0.07,7,8,9,0),
  createData('KitKat', 518, 26.0, 65, 7.07,7,8,9,0),
  createData('Lollipop', 392, 0.2, 98, 0.07,7,8,9,0),
  createData('Marshmallow', 318, 0, 81, 2.07,7,8,9,0),
  createData('Nougat', 360, 19.0, 9, 37.07,7,8,9,0),
  createData('Oreo', 437, 18.0, 63, 4.07,7,8,9,0),
];











function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'component', numeric: false, disablePadding: true, label: 'Component' },
  { id: 'moles in', numeric: true, disablePadding: false, label: 'Moles (in)' },
  { id: 'enthalpy', numeric: true, disablePadding: false, label: 'Enthalpy (in)' },
  { id: 'moles out', numeric: true, disablePadding: false, label: 'Moles (out)' },
  { id: 'enthalpy out', numeric: true, disablePadding: false, label: 'Enthalpy (out)' },
  { id: 'pressure', numeric: true, disablePadding: false, label: 'Enthalpy (out)' },
  { id: 'temperature', numeric: true, disablePadding: false, label: 'Pressure (Pa)' },
  { id: 'sizing', numeric: true, disablePadding: false, label: 'Temperature (C)' },
  { id: 'utilities', numeric: true, disablePadding: false, label: 'Sizing (m^3)' },
  { id: 'cost', numeric: true, disablePadding: false, label: 'Cost (USD)' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, unitName } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {unitName}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  


  //--------------------------------------------------------------
    const [molesIn,setMolesIn] = React.useState(0)
    const [enthalpyIn,setEnthalpyIn] = React.useState(0)
    const [molesOut,setMolesOut] = React.useState(0)
    const [enthalpyOut,setEnthalpyOut] = React.useState(0)
    const [pressure,setPressure] = React.useState(0)
    const [temperature,setTemperature] = React.useState(0)
    const [sizing,setSizing] = React.useState(0)
    const [utilities,setUtilities] = React.useState(0)
    const [cost,setCost] = React.useState(0)
    const [elements,setElements] = React.useState(rows)
    const [compound,setCompound] = React.useState("")
  



/*
    useEffect(() => {
        setElements((els) =>
          els.map((el) => {
            if (el.compounds === compound) {
              // it's important that you create a new object here
              // in order to notify react flow about the change
             
    
              el = {
                ...el,
                molesin: molesIn 
                
              }; //Source handle should be an object
            }
            return el;
          })
        );
      }, [compound, setElements,molesIn]); */
  //--------------------------------------------------------------

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {

    
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    //When you want to do something to all the selected items you can use newSelected
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} unitName={"That Unit"} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.compounds);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.compounds)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.compounds}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                      <input
                        value={row.compounds}
                        onChange={(evt) => {
                            setCompound(evt.target.value)
                            row.compounds = evt.target.value
                            }}
                      />
                        
                      </TableCell>
                      <TableCell align="right"> 
                      <input
                        value={row.molesin}
                        onChange={(evt) => {
                            setMolesIn(evt.target.value)
                            row.molesin = evt.target.value
                            }}
                      />
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.enthalpyin}
                        onChange={(evt) => {
                            setEnthalpyIn(evt.target.value)
                            row.enthalpyin = evt.target.value
                            }}
                      />
                     
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.molesout}
                        onChange={(evt) => {
                            setMolesOut(evt.target.value)
                            row.molesout = evt.target.value
                            }}
                      />
                      
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.enthalpyout}
                        onChange={(evt) => {
                            setEnthalpyOut(evt.target.value)
                            row.enthalpyout = evt.target.value
                            }}
                      />
                      
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.pressure}
                        onChange={(evt) => {
                            setPressure(evt.target.value)
                            row.pressure = evt.target.value
                            }}
                      />
                      
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.temperature}
                        onChange={(evt) => {
                            setTemperature(evt.target.value)
                            row.temperature = evt.target.value
                            }}
                      />
                      
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.sizing}
                        onChange={(evt) => {
                            setSizing(evt.target.value)
                            row.sizing = evt.target.value
                            }}
                      />
                      
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.utilities}
                        onChange={(evt) => {
                            setUtilities(evt.target.value)
                            row.utilities = evt.target.value
                            }}
                      />
                      
                      </TableCell>
                      <TableCell align="right">
                      <input
                        value={row.cost}
                        onChange={(evt) => {
                            setCost(evt.target.value)
                            row.cost = evt.target.value
                            }}
                      />
                      
                      </TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
         <Button variant="contained" onClick={() => { console.log("This is the current rows table",rows) }}>Default</Button>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}