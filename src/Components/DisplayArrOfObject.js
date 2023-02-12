import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HOC from './HOC';
import './DisplayArrOfObject.css';

const DisplayArrOfObject = () => {
    const [user, setUser] = useState([
        {
            userId: 1,
            name: "Karlo",
            age: 23,
            designation: "DevOps",
            email: "admin@email.com"
        },
        {
            userId: 2,
            name: "John",
            age: 25,
            designation: "Developer",
            email: "test@email.com"
        },
        {
            userId: 3,
            name: "Carl",
            age: 21,
            designation: "DevOps",
            email: "example@email.com"
        }
    ]);

    const handleClick = () => {
        const userData = [...user];

        userData[1].age = 30;
        userData[1].designation = "DevOps";
        userData[1].email = "john@email.com";
        setUser(userData);
    }

    return (
        <>
            <p className='arr-title'>Array of Object</p>
            <TableContainer component={Paper} style={{ width: "50%" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><div className="table-header">Name</div></TableCell>
                            <TableCell align="right"><div className="table-header">Age</div></TableCell>
                            <TableCell align="right"><div className="table-header">Designation</div></TableCell>
                            <TableCell align="right"><div className="table-header">Email</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                <div className="table-content">{row.name}</div>
                                </TableCell>
                                <TableCell align="right"><div className="table-content">{row.age}</div></TableCell>
                                <TableCell align="right"><div className="table-content">{row.designation}</div></TableCell>
                                <TableCell align="right"><div className="table-content">{row.email}</div></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" onClick={handleClick}>Update 2nd User</Button>
        </>
    );
};

export default HOC(DisplayArrOfObject);