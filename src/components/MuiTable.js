import React from 'react';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material'

function MuiTable() {
    return(
        <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': {border:0}}}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MuiTable;

const tableData = [{
    id: 1,
    first_name: "Nealson",
    last_name: "Maddrah",
    email: "nmaddrah0@so-net.ne.jp"
  }, {
    id: 2,
    first_name: "Maggy",
    last_name: "Jacobowitz",
    email: "mjacobowitz1@house.gov"
  }, {
    id: 3,
    first_name: "Issi",
    last_name: "Perceval",
    email: "iperceval2@last.fm"
  }, {
    id: 4,
    first_name: "Anatola",
    last_name: "Tadd",
    email: "atadd3@craigslist.org"
  }, {
    id: 5,
    first_name: "Nicoli",
    last_name: "Frail",
    email: "nfrail4@phpbb.com"
  }, {
    id: 6,
    first_name: "Odo",
    last_name: "Filipson",
    email: "ofilipson5@networksolutions.com"
  }, {
    id: 7,
    first_name: "Anderea",
    last_name: "Allingham",
    email: "aallingham6@netlog.com"
  }, {
    id: 8,
    first_name: "Barnabas",
    last_name: "Stelfax",
    email: "bstelfax7@uol.com.br"
  }, {
    id: 9,
    first_name: "Mallorie",
    last_name: "Ballister",
    email: "mballister8@techcrunch.com"
  }, {
    id: 10,
    first_name: "Wolfie",
    last_name: "Mcettrick",
    email: "wmcettrick9@jalbum.net"
  }]  