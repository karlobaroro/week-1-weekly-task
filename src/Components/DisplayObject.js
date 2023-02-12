import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import HOC from './HOC';
import './DisplayObject.css';

const DisplayObject = () => {
    const [user, setUser] = useState({
        name: "Karlo",
        age: 23,
        designation: "DevOps",
        email: "admin@email.com"
    });

    const handleClick = () => {
        setUser({
            ...user,
            name: "John",
            age: 25
        });
    }

    return (
        <div className="container">
            <p className="object-title">Object</p>

            <Card sx={{ width: "30%" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        User Info
                    </Typography>
                    <Typography variant="body2">
                        <p className="object-content">Name: {user.name}</p>
                        <p className="object-content">Age: {user.age}</p>
                        <p className="object-content">Designation: {user.designation}</p>
                        <p className="object-content">Email: {user.email}</p>
                    </Typography>
                    <Button variant="contained" size="small" onClick={handleClick}>Update</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default HOC(DisplayObject);