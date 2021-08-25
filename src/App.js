import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Greenhouses from './components/Greenhouses';
import Pavilion from './components/Pavilion';
import Mowers from './components/Mowers';
import Chainsaw from './components/Chainsaw';
import WeldingMachine from './components/WaldingMachine';
import Showers from './components/Showers';
import PhoneLink from './components/mini-phone';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content__wrapper">
        <Route exact path='/' component={Catalog} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/greenhouses' component={Greenhouses} />
        <Route exact path='/pavilion' component={Pavilion} />
        <Route exact path='/mowers' component={Mowers} />
        <Route exact path='/chainsaw' component={Chainsaw} />
        <Route exact path='/welding_machine' component={WeldingMachine} />
        <Route exact path='/showers' component={Showers} />
      </div>
      <Footer />
      <PhoneLink />
    </BrowserRouter>
  );
};

export default App;
