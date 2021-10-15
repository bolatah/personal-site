import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createDataForFirstTable(time_span, tech_eu15, tech_eu12, tra_eu15,
  tra_eu12) {
    
  return {
    time_span,
    tech_eu15,
    tech_eu12,
    tra_eu15,
    tra_eu12,
    }
};

const rows1 = [

  createDataForFirstTable('1990-1995', 'X','✓','X','X'),
  createDataForFirstTable('1996-2001', 'X', '✓', 'X','X'),
  createDataForFirstTable('2002-2008', 'X', '✓', '✓','X'),

];

function createDataForSecondTable(
  time_span, rta_eu15, rca1_eu15, rca2_eu15, rta_eu12, rca1_eu12, rca2_eu12
  ) {
    
  return {
    time_span,
    rta_eu15, 
    rca1_eu15, 
    rca2_eu15, 
    rta_eu12, 
    rca1_eu12, 
    rca2_eu12
    }
};
const rows2 = [

  createDataForSecondTable("1990-1995",  0.86, 0.15, -1.39, 1.38, 0.47, -0.98 ),
  createDataForSecondTable("1996-2001",  0.86, 0.38, -0.08, 1.28, 0.48, -0.91 ),
  createDataForSecondTable("2002-2008",  0.81, 1.04, "\xa00.17", 1.02, 0.89 ,-0.08 )

];

export default function CollapsibleTable() {
  const [open, setOpen] = useState(false);
  return  (
    <React.Fragment>
      <div className="table-responsive w-100 h-100" >
    <TableContainer component={Paper}  className="overflow-x-hidden" >
      <Table  className="table-responsive" aria-label="collapsible table" >
        <TableHead  >
        <TableRow >
            <TableCell style = {{ border: "1px solid black" }}> Time Span</TableCell>
            <TableCell style = {{ border: "1px solid black" }} align="center" colSpan={2}> Technological Specialisation</TableCell>
            <TableCell style = {{ border: "1px solid black" }} align="center" colSpan={2}> Trade Specialisation</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style = {{ border: "1px solid black" }}>Turkey</TableCell>
            <TableCell style = {{ border: "1px solid black" }}>EU15</TableCell>
            <TableCell style = {{ border: "1px solid black" }}>EU12</TableCell>
            <TableCell style = {{ border: "1px solid black" }}>EU15</TableCell>
            <TableCell style = {{ border: "1px solid black" }}>EU12</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {rows1.map((row) => (
                <StyledTableRow key={row.time_span}>
                  <StyledTableCell component="th" scope="row">
                    {row.time_span}
                  </StyledTableCell>
                  <StyledTableCell >{row.tech_eu15}</StyledTableCell>
                  <StyledTableCell >{row.tech_eu12}</StyledTableCell>
                  <StyledTableCell >{row.tra_eu15}</StyledTableCell>
                  <StyledTableCell >{row.tra_eu12}</StyledTableCell>
                </StyledTableRow>
              ))}
              <StyledTableRow>
                <TableCell colSpan={1} onMouseDown={ e => e.stopPropagation() }>            
                  <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
              </StyledTableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit >
                      <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                          detailed
                        </Typography>
                        <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell style = {{ border: "1px solid black" }}> TR</TableCell>
                                <TableCell style = {{ border: "1px solid black" }} align="center" colSpan={3}> EU15</TableCell>
                                <TableCell style = {{ border: "1px solid black" }} align="center" colSpan={3}> EU12</TableCell>
                              </TableRow>
                                <TableCell style = {{ border: "1px solid black" }}>Time Span</TableCell>
                                <TableCell style = {{ border: "1px solid black" }}>RTA</TableCell>
                                <TableCell style = {{ border: "1px solid black" }}>RCA1</TableCell>
                                <TableCell style = {{ border: "1px solid black" }}>RCA2</TableCell>
                                <TableCell style = {{ border: "1px solid black" }} >RTA</TableCell>
                                <TableCell style = {{ border: "1px solid black" }}>RCA1</TableCell>
                                <TableCell style = {{ border: "1px solid black" }}>RCA2</TableCell>
                            </TableHead>   
                            <TableBody>
                              {rows2.map((row) => (
                              <StyledTableRow key={row.time_span}>
                                <StyledTableCell component="th" scope="row">
                                  {row.time_span}
                                </StyledTableCell>
                                <StyledTableCell >{row.rta_eu15}</StyledTableCell>
                                <StyledTableCell >{row.rca1_eu15}</StyledTableCell>
                                <StyledTableCell >{row.rca2_eu15}</StyledTableCell>
                                <StyledTableCell >{row.rta_eu12}</StyledTableCell>
                                <StyledTableCell >{row.rca1_eu12}</StyledTableCell>
                                <StyledTableCell >{row.rca2_eu12}</StyledTableCell>
                              </StyledTableRow>))}
                            </TableBody>
                          </Table>
                      </Box>
                    </Collapse>
                  </TableCell>  
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </React.Fragment>
  );
}
