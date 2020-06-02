import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MUILink from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import ArticleAadi from './aadi.js'

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: [ 'Lato' ].join(','),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  buttonBase: {
   display: "block",
   textAlign: "initial"
  }
}));

const testContent = [
  {
    id: 1,
    name: "Significance Name 1",
    img: "test_image.png"
  },
  {
    id: 2,
    name: "Significance Name 2",
    img: "test_image.png"
  },
];

function App(){
  return(
    <main>
        <Switch>
          <Route exact  path="/" component={HomePage} files={testContent}/>
          <Route path="/aadi" component={ArticleAadi} />
        </Switch>
    </main>
  );
}


function HomePage({children}) {
  const classes = useStyles();
  return (
      <>
      <div className="huge">
        Satsang Notes
      </div>
      <div className="article-list">
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={1} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <ButtonBase
              className={classes.buttonBase}
              component={Link}
              to={"/aadi"}
              >
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.typography} variant="body2">
                  Significance of Aadi 1st
                </Typography>
              </CardContent>
              </ButtonBase>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </div>
      </>
  );
}



ReactDOM.render(
  <BrowserRouter>
    <App/>,
  </BrowserRouter>,
  document.querySelector('#root'));
