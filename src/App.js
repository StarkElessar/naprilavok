import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Catalog from './components/pages/Catalog';
import Greenhouses from './components/pages/Greenhouses';
import Pavilion from './components/pages/Pavilion';
import Mowers from './components/pages/Mowers';
import Chainsaw from './components/pages/Chainsaw';
import WeldingMachine from './components/pages/WeldingMachine';
import Showers from './components/pages/Showers';
import PhoneLink from './components/common/miniPhone';

const App = ({ state }) => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content__wrapper">
        <Route exact path='/' component={ () => <Catalog cardData={state.сatalog.cardData} itemsData={state.сatalog.itemsData}/> } />
        <Route exact path='/catalog' component={ () => <Catalog cardData={state.сatalog.cardData} itemsData={state.сatalog.itemsData}/> } />
        <Route exact path='/greenhouses' component={Greenhouses} />
        <Route exact path='/pavilion' component={Pavilion} />
        <Route exact path='/mowers' component={Mowers} />
        <Route exact path='/chainsaw' component={Chainsaw} />
        <Route exact path='/welding' component={WeldingMachine} />
        <Route exact path='/showers' component={Showers} />
      </div>
      <Footer linkData={state.footer.linkData} />
      <PhoneLink />
    </BrowserRouter>
  );
};

export default App;
