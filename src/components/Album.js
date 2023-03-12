import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewForm from './NewForm';
import NewCard from './NewCard';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://alexandrerocha-10.github.io/portfolio/">
        Portfolio/
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
    const [cardName, setCardName] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [cardAttr1, setCardAttr1] = useState('0');
    const [cardAttr2, setCardAttr2] = useState('0');
    const [cardAttr3, setCardAttr3] = useState('0');
    const [cardImage, setCardImage] = useState('');
    const [cardRare, setCardRare] = useState('normal');
    const [cardTrunfo, setCardTrunfo] = useState(false);
    const [hasTrunfo, setHasTrunfo] = useState(false);
    const [cardsList, setCardsList] = useState([]);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  
    const onInputChange = (e) => {
      const { name, type, checked } = e.target;
      const value = type === 'checkbox' ? checked : e.target.value;
      switch (name) {
        case 'cardName':
          setCardName(value);
          break;
        case 'cardDescription':
          setCardDescription(value);
          break;
        case 'cardAttr1':
          setCardAttr1(value);
          break;
        case 'cardAttr2':
          setCardAttr2(value);
          break;
        case 'cardAttr3':
          setCardAttr3(value);
          break;
        case 'cardImage':
          setCardImage(value);
          break;
        case 'cardRare':
          setCardRare(value);
          break;
        case 'cardTrunfo':
          setCardTrunfo(checked);
          break;
        default:
          break;
      }
      isValidInputs();
    };
  
    const onSaveButtonClick = () => {
      const newCard = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };
  
      setCardsList([...cardsList, newCard]);
      setCardName('');
      setCardDescription('');
      setCardAttr1('0');
      setCardAttr2('0');
      setCardAttr3('0');
      setCardImage('');
      setCardRare('normal');
      setCardTrunfo(false);
      setHasTrunfo(hasTrunfo || cardTrunfo);
    };
  
    const isValidInputs = () => {
      setIsSaveButtonDisabled(checkInputValidation());
    };
  
    const checkInputValidation = () => {
      const SUM_TOTAL = 210;
      const ATTR_MAX = 90;
      const ATTR_MIN = 0;
  
      const cardSizes =
        cardName.length &&
        cardDescription.length &&
        cardImage.length &&
        cardRare.length >= 1;
  
      const cardAttrSum =
        Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= SUM_TOTAL;
  
      const cardAttrMaxValor =
        Number(cardAttr1) <= ATTR_MAX &&
        Number(cardAttr2) <= ATTR_MAX &&
        Number(cardAttr3) <= ATTR_MAX;
  
      const cardAttrMinValor =
        Number(cardAttr1) >= ATTR_MIN &&
        Number(cardAttr2) >= ATTR_MIN &&
        Number(cardAttr3) >= ATTR_MIN;
  
      const validate = cardSizes && cardAttrSum && cardAttrMaxValor && cardAttrMinValor;
  
      return !validate;
    };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SportsEsportsIcon sx={{ mr: 2 }} style={{ fontSize: 30 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Tryunfo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <NewForm 
            cardName={ cardName }
            cardDescription={ cardDescription } 
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }/>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            {cardsList.map((cards) => (<NewCard
              cardName={ cards.cardName }
              cardDescription={ cards.cardDescription }
              cardAttr1={ cards.cardAttr1 }
              cardAttr2={ cards.cardAttr2 }
              cardAttr3={ cards.cardAttr3 }
              cardImage={ cards.cardImage }
              cardRare={ cards.cardRare }
              cardTrunfo={ cards.cardTrunfo }
              key={ cards.cardName }
            />))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Tryunfo Project - a React site by{" "}
            <a href="https://github.com/AlexandreRocha-10" target="_blank" rel="noreferrer">
                Alexandre Emiliano Rocha
            </a>
            .
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
