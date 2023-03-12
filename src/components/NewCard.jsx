import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1];

const theme = createTheme();

export default function NewCard({
  cardName, cardDescription, cardAttr1, cardAttr2,
  cardAttr3, cardImage, cardRare, cardTrunfo,
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={ cardImage }
                    alt={ cardName }
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    { cardName }
                    </Typography>
                    <Typography>
                    { cardDescription }
                    </Typography>
                    <Typography>
                    Speed:{" "}{ cardAttr1 }{" "}Power:{" "}{ cardAttr2 }{" "}Handling:{" "}{ cardAttr3 }{" "}  
                    </Typography>
                    <Typography>
                    { cardRare }
                    </Typography>
                    <Typography>
                    { cardTrunfo }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </ThemeProvider>
  );
}
