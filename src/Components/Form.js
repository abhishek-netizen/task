import React, { useState } from 'react';
import '../Form.css';
import DateFnsUtils from '@date-io/date-fns'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const startDate = new Date('2021-02-12T00:00:00.000Z');
const endDate = new Date('2021-03-31T23:59:00.000Z');

 
// console.log(isoDate.toString());
// console.log(isoDate.toISOString());

function Branddetails() {
    const classes = useStyles();
    const { handleSubmit} = useForm();
    const [selectedDate, setSelectedDate] = useState(startDate.toISOString())
    const [org, setOrg] = useState('');
    const [checked, setChecked] = useState({
        active: true,
    });
    
    const handleChange = (date) => {
        setSelectedDate(date)
    }

    const handleSelector = (e) => {
        setOrg(e.target.value)
    } 

    const handleCheckbox = (event) => {
        setChecked({...checked, [event.target.name]: event.target.checked });
    };

    const onSubmit = (event) => {
        console.log(event)
    }
    
    return (
        <>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <h3>Brand Details Form</h3>
                <TextField id="outlined-basic"  className="txtId" label="Enter Registered Id" variant="outlined" />
                 <br />
                 <label>Select proper date and time</label>
                <Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker 
                        disableToolbar
                        variant='inline'
                        format='MM/dd/yyy'
                        margin='normal'
                        id='date-picker'
                        label='Date Picker'
                        minDate={startDate}
                        maxDate={endDate}    
                        value={selectedDate}
                        onChange={handleChange}
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                        }}
                    />
                    <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    defaultValue=""
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleChange}
                     KeyboardButtonProps={{
                    'aria-label': 'change time',
                    }}
                    />
                    </MuiPickersUtilsProvider>
                </Grid>
         <Select
          value={org}
          onChange={handleSelector}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
         >
          <MenuItem value="">
            <em>Choose your organization type</em>
          </MenuItem>
          <MenuItem value={1}>Startup</MenuItem>
           <MenuItem value={2}>Enterprise</MenuItem>
           <MenuItem value={3}>Freelancer</MenuItem>
           <MenuItem value={4}>Digital Agency</MenuItem>
            <MenuItem value={5}>MNC</MenuItem>
                </Select> <br />
                <FormControlLabel
             control={<Checkbox value={checked} checked={checked.active} onChange={handleCheckbox} name="active" />}
              label="active"
                />
                <br />
                <Button className="buttonColor"  type="submit">Submit</Button>
            </form>
            </>
    )
}

export default Branddetails

