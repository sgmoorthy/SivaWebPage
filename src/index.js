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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.css';


import ArticleAadi from './aadi.js';
import img1 from "./images/img1.jpg";

import ArticleUyir from './uyir.js';
import img2 from "./images/img2.jpg";

import ArticleUpadesam from './upadesam.js';
import img3 from "./images/img3.jpg";

import ArticleWatching from './watching.js';
import img4 from "./images/img4.jpg";

import ArticleDriving from './driving.js';
import img5 from "./images/img5.png";

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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }

}));

const testContent = [
  {
    id: 2,
    name: "On Uyir",
    img: img2,
    path: "/uyir"
  },
  {
    id: 3,
    name: "Upadesam",
    img: img3,
    path: "/sivaupadesam"
  },
  {
    id: 4,
    name: "On awareness",
    img: img4,
    path:"/watching"
  },
  {
    id: 1,
    name: "Significance of Aadi 1st",
    img: img1,
    path: "/aadi"
  },
  {
    id: 5,
    name: "Are you driving your car?",
    img: img5,
    path:"/driving"
  }
 
];

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function App(){
  return(
    <main>
        <Switch>
          <Route
            exact path='/'
            render={(props) => <HomePage {...props} content={testContent} />}
          />
          <Route path="/aadi" component={ArticleAadi} />
          <Route path="/uyir" component={ArticleUyir} />
          <Route path="/sivaupadesam" component={ArticleUpadesam} />
          <Route path="/watching" component={ArticleWatching} />
          <Route path="/driving" component={ArticleDriving} />
        </Switch>
    </main>
  );
}





function HomePage({content}) {
  const classes = useStyles();
  return (
      <>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Siva Arul Veli
          </Typography>
          <HomeIcon  />
        </Toolbar>
      </AppBar>



      <div className="huge">
        Satsang Notes
      </div>
      <div className="article-list">
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {
            content.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <ButtonBase
                  className={classes.buttonBase}
                  component={Link}
                  to={card.path}
                  >
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.typography} variant="body2">
                    {card.name}
                    </Typography>
                  </CardContent>
                  </ButtonBase>
                </Card>
              </Grid>
          ))}
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

