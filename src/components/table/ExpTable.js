import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Container } from "@material-ui/core"
import { AddCircle, BorderColor, Delete } from "@material-ui/icons"
import "./ExpTable.css"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function ExpTable(props) {
  const classes = useStyles()

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Designation</StyledTableCell>
              <StyledTableCell align="center">Company</StyledTableCell>
              <StyledTableCell align="center">Working From</StyledTableCell>
              <StyledTableCell align="center">Working Till</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">
                <AddCircle
                  className="hover"
                  onClick={() => props.open("new")}
                />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.empDetails.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell align="center" style={{ fontWeight: "bold" }}>
                  {row.designation}
                </StyledTableCell>
                <StyledTableCell align="center">{row.company}</StyledTableCell>
                <StyledTableCell align="center">{row.from}</StyledTableCell>
                <StyledTableCell align="center">{row.to}</StyledTableCell>
                <StyledTableCell align="center">{row.city}</StyledTableCell>
                <StyledTableCell align="center">
                  <BorderColor
                    className="hover"
                    color="primary"
                    style={{ marginRight: "8px" }}
                    onClick={() => props.open("edit", i)}
                  />
                  <Delete
                    color="secondary"
                    className="hover"
                    onClick={() => props.remove(i)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
