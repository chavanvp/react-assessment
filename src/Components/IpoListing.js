import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IpoContext from "../Utilities/IpoContext";
import { Link } from "react-router-dom";
import "../Assets/css/IpoListing.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f8f8f8",
    color: "black",
    fontSize: "12px",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "white",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function IpoListing() {
  const ipoData = useContext(IpoContext);
  return (
    <div >
      <TableContainer component={Paper} >
        <Table className='table' sx={{ minWidth: 700,boxShadow:1 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Company/Issue date</StyledTableCell>
              <StyledTableCell align="center">Issue size</StyledTableCell>
              <StyledTableCell align="center">Price range</StyledTableCell>
              <StyledTableCell align="center">Min invest/qty</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ipoData.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell scope="row">
                  <Link
                    className="reset-a"
                    key={index}
                    to={"/details/" + row.id}
                  >
                    <div style={{ display: "flex" }}>
                      <div>
                        <img
                          alt="logo"
                          style={{
                            height: "55px",
                            borderRadius: "50%",
                            width: "55px",
                            objectFit: "contain",
                            paddingRight: "5px",
                          }}
                          src={row.logoURI}
                        ></img>
                      </div>
                      <div>
                        <div className="text-bold">{row.name}</div>
                        <div>{row.ipoDetails.dates}</div>
                      </div>
                    </div>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="text-bold">{row.ipoDetails.issueSize}</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="text-bold">{row.ipoDetails.priceRange}</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="text-bold">
                    {row.ipoDetails.mimimumAmount}
                  </div>
                  <div>{row.ipoDetails.lotsCapacity}</div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
