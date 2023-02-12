import React, { useState } from 'react';
import { TextField, Grid, Button } from '@mui/material/';

const DisplayForm = () => {
    const [user, setUser] = useState({
        name: "",
        dob: "",
        email: "",
        contact: "",
        desc: "",
        formValid: false,
        error: {
            nameError: false,
            nameErrorText: "",
            dateOfBirthErrorText: "",
            emailError: false,
            emailErrorText: "",
            contactError: false,
            contactErrorText: "",
            descError: false,
            descErrorText: ""
        }
    });

    const handleChange = e => {
        let inputId = e.target.id.split(" ")[0];

        if (inputId == "name") {
            validateName(e.target.value);
        } else if (inputId == "email") {
            validateEmail(e.target.value);
        } else if (inputId == "contact") {
            validateContact(e.target.value);
        } else if (inputId == "desc") {
            validateDesc(e.target.value);
        } else if (inputId == "dob") {
            validateDob(e.target.value);
        }

    }

    const validateName = (nameInput) => {
        let formValid = user.formValid;
        let nameError = user.error.nameError;
        let nameErrorText = user.error.nameErrorText;

        let pattern = /^[a-zA-Z\s]*$/;

        if (nameInput.trim() == "") {
            nameError = true;
            nameErrorText = "This is Required";
            formValid = false;
        } else if (!pattern.test(nameInput)) {
            nameError = true;
            nameErrorText = "This is Invalid";
            formValid = false;
        } else {
            nameError = false;
            nameErrorText = "";
            formValid = true;
        }

        setUser({
            ...user,
            name: nameInput,
            formValid,
            error: {
                ...user.error,
                nameError,
                nameErrorText
            }
        })

        return formValid;
    }

    const validateEmail = (emailInput) => {
        let formValid = user.formValid;
        let emailError = user.error.emailError;
        let emailErrorText = user.error.emailErrorText;

        let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailInput.trim() == "") {
            emailError = true;
            emailErrorText = "This is Required";
            formValid = false;
        } else if (!pattern.test(emailInput)) {
            emailError = true;
            emailErrorText = "This is Invalid";
            formValid = false;
        } else {
            emailError = false;
            emailErrorText = "";
            formValid = true;
        }

        setUser({
            ...user,
            email: emailInput,
            formValid,
            error: {
                ...user.error,
                emailError,
                emailErrorText
            }
        })

        return formValid;
    }

    const validateContact = (contactInput) => {
        let formValid = user.formValid;
        let contactError = user.error.contactError;
        let contactErrorText = user.error.contactErrorText;

        let pattern = /^[0-9]*$/;

        if (contactInput.trim() == "") {
            contactError = true;
            contactErrorText = "This is Required";
            formValid = false;
        } else if (!pattern.test(contactInput) || contactInput.length != 10) {
            contactError = true;
            contactErrorText = "This is Invalid";
            formValid = false;
        } else {
            contactError = false;
            contactErrorText = "";
            formValid = true;
        }

        setUser({
            ...user,
            contact: contactInput,
            formValid,
            error: {
                ...user.error,
                contactError,
                contactErrorText
            }
        })

        return formValid;
    }

    const validateDesc = (descInput) => {
        let formValid = user.formValid;
        let descError = user.error.descError;
        let descErrorText = user.error.descErrorText;

        if (descInput.trim() == "") {
            descError = true;
            descErrorText = "This is Required";
            formValid = false;
        } else if (descInput.length > 250) {
            descError = true;
            descErrorText = "This is Invalid";
            formValid = false;
        } else {
            descError = false;
            descErrorText = "";
            formValid = true;
        }

        setUser({
            ...user,
            desc: descInput,
            formValid,
            error: {
                ...user.error,
                descError,
                descErrorText
            }
        })

        return formValid;
    }

    const validateDob = (dobInput) => {
        let formValid = user.formValid;
        let dateOfBirthErrorText = user.error.dateOfBirthErrorText;
        let formattedDob = new Date(dobInput);
        let timeElapsed = Date.now();
        let today = new Date(timeElapsed);

        if (dobInput.trim() == "") {
            dateOfBirthErrorText = "This is Required";
            formValid = false;
        } else if (formattedDob > today) {
            dateOfBirthErrorText = "This is Invalid";
            formValid = false;
        } else {
            dateOfBirthErrorText = "";
            formValid = true;
        }

        setUser({
            ...user,
            dob: dobInput,
            formValid,
            error: {
                ...user.error,
                dateOfBirthErrorText
            }
        })

        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            validateName(user.name) &&
            validateEmail(user.email) &&
            validateContact(user.contact) &&
            validateDesc(user.desc) &&
            validateDob(user.dob)
        ) {
            alert('Account is Successfully created');

            setUser({
                ...user,
                name: "",
                dob: "",
                email: "",
                contact: "",
                desc: ""
            });
        }
    }

    return (
        <div>
            <h3>Form with Validations using Functional Component</h3>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField
                            required
                            id="name standard-required"
                            label="Name"
                            variant="standard"
                            sx={{ margin: "5px" }}
                            error={user.error.nameError}
                            helperText={user.error.nameErrorText}
                            onChange={handleChange}
                            value={user.name}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <p>Date of Birth</p>
                        <input type="date" max={new Date().toISOString().split("T")[0]} id="dob" onChange={handleChange} value={user.dob} />
                        <p style={{ color: "red", fontSize: "13px" }}>{user.error.dateOfBirthErrorText}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField
                            required
                            id="email standard-required"
                            label="Email"
                            variant="standard"
                            sx={{ margin: "5px" }}
                            error={user.error.emailError}
                            helperText={user.error.emailErrorText}
                            onChange={handleChange}
                            value={user.email}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            required
                            id="contact standard-required"
                            label="Contact Number"
                            variant="standard"
                            sx={{ margin: "5px" }}
                            error={user.error.contactError}
                            helperText={user.error.contactErrorText}
                            onChange={handleChange}
                            value={user.contact}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="desc standard-multiline-static"
                            label="Tell me about yourself"
                            variant="standard"
                            multiline
                            rows={3}
                            error={user.error.descError}
                            helperText={user.error.descErrorText}
                            onChange={handleChange}
                            value={user.desc}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={2} style={{ margin: "10px" }}>
                        <Button variant="contained" type="submit">Sign up</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default DisplayForm;