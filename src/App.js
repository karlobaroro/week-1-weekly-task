import React from 'react';
import DisplayArrOfObject from './Components/DisplayArrOfObject';
import DisplayForm from './Components/DisplayForm';
import DisplayObject from './Components/DisplayObject';
import DisplayUsingHooks from './Components/DisplayUsingHooks';
import { Grid } from '@mui/material/';

const App = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DisplayObject />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DisplayArrOfObject />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DisplayUsingHooks />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DisplayForm />
        </Grid>
      </Grid>
    </>
  );
};

export default App;