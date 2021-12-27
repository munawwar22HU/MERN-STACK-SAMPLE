import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import makeStyles from '../../styles.js';
import { Container, AppBar } from '@material-ui/core';


export default function UpdateStudent(props) {
    const id = props.match.params.id;
    console.log(id);
    const classes = makeStyles();
    const [student, setStudent] = useState({
        regNo: 0,
        studentName: '',
        grade: '',
        section: ''
    });

    useEffect(() => {
        axios.get("http://localhost:5000/students/" + id).then((s) => {
            setStudent(s.data);
        })
    }, [])


    const updateStudent = () => {
        axios.put('http://localhost:5000/students/' + id, student).then((res) => {
            props.history.push('/');
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <Container className={classes.content}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <h2>Update Student</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event) => {
                        setStudent({ ...student, regNo: event.target.value })
                    }} />
                    <br />
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
                        setStudent({ ...student, studentName: event.target.value })
                    }} />
                    <br />
                    <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
                        setStudent({ ...student, grade: event.target.value })
                    }} />
                    <br />
                    <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
                        setStudent({ ...student, section: event.target.value })
                    }} />
                    <br />
                    <Button variant="contained" color="primary" onClick={updateStudent}>
                        Update
                    </Button>
                </form>
            </AppBar>

        </Container>
    );
}
