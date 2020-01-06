import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";

export default function TableRestaurant(data) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    if(data.data.restaurants.length === 0) {
        data.data.restaurants = ["Chargement..."];
        console.log(data);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return <TableContainer component={Paper}>
        <Table aria-label="Restaurant table">
            <TableHead>
                <TableRow>
                    <TableCell>Nom du restaurant</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.data.restaurants
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => (
                    <TableRow onClick={deleteElement(row)}>
                        <TableCell component="th" scope="row">
                            {row}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TablePagination rowsPerPageOptions={[10, 20, 30, 40, 50]}
                             count={data.data.restaurants.length}
                             rowsPerPage={rowsPerPage}
                             page={page}
                             onChangePage={handleChangePage}
                             onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Table>
    </TableContainer>
}

function deleteElement(data) {
    console.log(data);
}
