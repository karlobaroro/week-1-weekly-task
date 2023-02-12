import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import './DisplayUsingHooks.css';

const DisplayUsingHooks = () => {
    const [arrOfDepartment, setDepartment] = useState(["IT", "HR", "Management"]);

    const handleClick = () => {
        setDepartment([...arrOfDepartment, "Marketing", "Cusomer Service"]);
    }

    return (
        <>
            <p className='hook-title'>Other Data types</p>

            <TableContainer component={Paper} style={{ width: "20%", backgroundColor:"#F6F7C1" }} className="dept-container">
                <Table sx={{ minWidth: 100 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><div className="table-header">Departments</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arrOfDepartment.map((dept) => (
                            <TableRow
                                key={dept}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >   
                                <TableCell component="th" scope="row">
                                <div className="table-content">{dept}</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" size="small" onClick={handleClick}>Update</Button>
        </>
    );
};

export default DisplayUsingHooks;