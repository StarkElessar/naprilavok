import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/common/Footer';
import Catalog from './components/page/Catalog';
import Greenhouses from './components/page/Greenhouses';
import Pavilion from './components/page/Pavilion';
import Mowers from './components/page/Mowers';
import Chainsaw from './components/page/Chainsaw';
import WeldingMachine from './components/page/WaldingMachine';
import Showers from './components/page/Showers';
import PhoneLink from './components/common/mini-phone';

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
