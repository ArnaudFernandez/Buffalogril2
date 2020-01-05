import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default ({data}) =>
        <TableContainer component={Paper}>
            <Table aria-label="Restaurant table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nom du restaurant</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.hobbies.map(row => (
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {row}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
