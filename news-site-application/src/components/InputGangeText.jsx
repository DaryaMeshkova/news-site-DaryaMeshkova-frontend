import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";


export default function InputGhangeText({ text, setText }) {
  return (
    <Grid container direction="row" spacing="8">
      <Grid item>
        <TextField
          value={text}
          onChange={(event) => { setText(event.target.value) }}
        />
      </Grid>
    </Grid>
  );
}


