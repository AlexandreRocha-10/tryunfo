import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function NewForm({
    cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
  }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add a New Car
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="cardName"
                    label="Card Name"
                    name="cardName"
                    onChange={ onInputChange }
                    value={ cardName }
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="cardDescription"
                    label="Card Description"
                    name="cardDescription"
                    onChange={ onInputChange }
                    value={ cardDescription }
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                    name="cardAttr1"
                    required
                    fullWidth
                    id="cardAttr1"
                    label="Speed"
                    onChange={ onInputChange }
                    value={ cardAttr1 }
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                    required
                    fullWidth
                    id="cardAttr2"
                    label="Power"
                    name="cardAttr2"
                    onChange={ onInputChange }
                    value={ cardAttr2 }
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                    required
                    fullWidth
                    id="cardAttr3"
                    label="Handling"
                    name="cardAttr3"
                    onChange={ onInputChange }
                    value={ cardAttr3 }
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="cardImage"
                    label="Card Image"
                    name="cardImage"
                    onChange={ onInputChange }
                    value={ cardImage }
                />
                </Grid>
                <Grid item xs={12}>
                    <Select
                        required
                        fullWidth
                        id="cardRare"
                        name="cardRare"
                        value={ cardRare }
                        onChange={ onInputChange }
                    >
                        <MenuItem value="normal">Normal</MenuItem>
                        <MenuItem value="raro">Raro</MenuItem>
                        <MenuItem value="muito raro">Muito Raro</MenuItem>
                    </Select>
                </Grid>

                    {hasTrunfo ? <h3>Você já tem um Super Trunfo em seu baralho</h3> : (
                    <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox 
                        id="cardTrunfo"
                        name="cardTrunfo"
                        checked={cardTrunfo}
                        onChange={onInputChange} 
                        color="primary" 
                        />}
                      label="Super Trybe Trunfo"
                    />
                  </Grid>
                )}
              
              
            </Grid>
            <Button
              type="submit"
              name="save-button"
              onClick={ onSaveButtonClick }
              disabled={ isSaveButtonDisabled }
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Card
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}