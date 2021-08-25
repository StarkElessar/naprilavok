import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPageCatalog from './components/MainPageCatalog/MainPageCatalog';
import Greenhouses from './components/Greenhouses/Greenhouses';
import Pavilion from './components/Pavilion/Pavilion';
import Mowers from './components/Mowers/Mowers';
import Chainsaw from './components/Chainsaw/Chainsaw';
import WeldingMachine from './components/WaldingMachine/WeldingMachine';
import Showers from './components/Showers/Showers';

const App = () => {
  return (
    <BrowserRouter>
        
      <Header />
      
      <div className="appContent__wrapper">

        <Route exact path='/catalog' component={MainPageCatalog} />
        <Route exact path='/greenhouses' component={Greenhouses} />
        <Route exact path='/pavilion' component={Pavilion} />
        <Route exact path='/mowers' component={Mowers} />
        <Route exact path='/chainsaw' component={Chainsaw} />
        <Route exact path='/welding_machine' component={WeldingMachine} />
        <Route exact path='/showers' component={Showers} />
        
      </div>
      
      <Footer />

    </BrowserRouter>
  );
};

export default App;
