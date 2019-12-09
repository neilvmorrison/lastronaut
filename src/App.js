import React from 'react';
import withStyles from 'react-jss';

import boneFace from './assets/boneface_party_on.jpg';
import stampEffect from './assets/stamp-effect.png';

const styles = {
  root: {
    height: '100vh',
    display: 'grid',
    '@media (max-width: 540px)': {
      gridTemplateRows: '1fr 1fr',
    },
    '@media (min-width: 541px)': {
      gridTemplateColumns: '1fr 1fr',
    }
  },
  image: {
    justifySelf: 'flex-end',
    alignSelf: 'flex-end',
    maxWidth: '100%',
    paddingTop: '50px'
  },
  header: {
    alignSelf: 'center',
    justifySelf: 'center',
    color: '#fff',
    fontFamily: 'Rajdhani, sans-serif',
  },
  mainHeader: {
    fontSize: '5rem',
    margin: '0',
    fontWeight: '600',
    '@media(max-width: 540px)': {
      fontSize: '3rem',
    }
  },
  subHeader: {
    position: 'relative',
    color: 'rgb(247, 179, 70)',
    display: 'inline-block',
    border: '5px solid rgb(247, 179, 70)',
    borderRadius: '4px',
    padding: '0 8px',
    transform: 'rotate(-3deg)',
    fontSize: '6rem',
    margin: '0',
    fontWeight: '600',
    maskImage: `url(${stampEffect})`,
    maskSize: '900px 600px',
    '@media(max-width: 540px)': {
      fontSize: '3rem',
    }
  }
}

function App({ classes }) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1 className={classes.mainHeader}>lastronaut</h1>
        <h2 className={classes.subHeader}>07.20.2020</h2>
      </header>
      <img src={boneFace} className={classes.image} alt="art by boneface" />
    </div>
  );
}

export default withStyles(styles)(App);
