import styles from './App.module.css';
import './assets/fonts/fonts.module.css'
import Header from './Components/Header/Header'
import React from 'react';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
    </div>
  );
}

export default App;
