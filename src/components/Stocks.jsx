import React, { useEffect, useState } from "react";
import { fetchWrapper } from "../services/fetchWrapper";
import { parse } from "papaparse";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Stack from "@mui/material/Stack";
import { Typography,Link } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { CustomInput } from "../ExtendedComponents/CustomInputs";
import FuzzySearch from 'fuzzy-search';
import { useNavigate } from "react-router-dom";

const Stocks = (props) => {

    const [AllStocks, setAllStocks] = useState([]);
    const [Columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [allrows, setallRows] = useState([]);

    const [searchText, setsearchText] = useState("");
    const navigate = useNavigate();
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: "#FAFAFA",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#FFFFFF",
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.table.primary,
            color: theme.palette.text.heading,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            color: theme.palette.text.secondary,
            padding: 9
        },
    }));

    // const styledPaper = styled(Paper)(({ theme }) => ({
    //     padding: theme.spacing(2),
    //     textAlign: "left",
    //     color: theme.palette.text.secondary,
    // }));

    useEffect(() => {
        getStocks();
    }, [])

    const getStocks = () => {
        let url = process.env["REACT_APP_InputService"] + "/v2/instruments";
        fetch(url, { method: "GET" })
            .then((response) => response.text())
            .then(data => {
                if (data) {
                    let aTableData = parse(data);
                    setAllStocks(aTableData.data);
                    setColumns(aTableData.data[0]);
                    let rows = aTableData.data.slice(1);
                    rows = rows.map(item => {
                        return {
                            symbol: item[0],
                            name: item[1],
                            sector: item[2],
                            validTill: item[3]
                        }
                    })
                    setRows(rows);
                    setallRows(rows);
                }
            })
    }

    const searcher = new FuzzySearch(allrows, ['symbol', 'name'], {
        caseSensitive: false,
    });

    useEffect(() => {
        if (searchText != "") {
            const searchData = setTimeout(() => {
                let fussySearchRes = searcher.search(searchText);
                // console.log(fussySearchRes);
                setRows(fussySearchRes);
            }, 2000)
            return () => clearTimeout(searchData);
        }
        else
            setRows(allrows)
    }, [searchText])

    const onSearch = (searchQuery) => {
        setsearchText(searchQuery);
    }

    return (
        <Stack>
            <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ color: (theme) => theme.palette.primary.main, fontSize: (theme) => theme.typography.h1.fontSize }}>
                    Stocks
                </Typography>
                <CustomInput type="text" placeholder="Search.." value={searchText} onChange={(oEvent) => onSearch(oEvent.target.value)} />

            </Toolbar>
            {/* <Toolbar >
            </Toolbar> */}
            <Paper sx={{ margin: "1rem" }}>
                <TableContainer sx={{ height: "30rem" }}>
                    <Table size="small" stickyHeader>
                        <TableHead sx={{ "& .MuiTableCell-root.MuiTableCell-head": { background: (theme) => theme.palette.primary.main, color: "#fff" } }} >
                            <StyledTableRow>
                                {Columns?.map((item) =>
                                    (<StyledTableCell>{item}</StyledTableCell>)
                                )}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody >
                            {rows.map((row) => (
                                <StyledTableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        <Link
                                            component="button"
                                            variant="body2"
                                            onClick={() => {
                                                navigate(`/quotes/${row.symbol}`)
                                            }}
                                        >
                                            {row.symbol}
                                        </Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.sector}</StyledTableCell>
                                    <StyledTableCell align="left">{row.validTill}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Stack >)
}

export default Stocks;