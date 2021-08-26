import green from './img/greenhouses.jpg';
import pavilion from './img/pavilion.jpg';
import mowers from './img/mowers.jpg';
import chainsaw from './img/chainsaw.jpg';
import welding from './img/welding-machine.jpg';
import showers from './img/showers.jpg';

const state = {
  footer: {
    linkData: [
      { url: '/catalog', title: 'Главный каталог' },
      { url: '/greenhouses', title: 'Теплицы' },
      { url: '/pavilion', title: 'Беседки' },
      { url: '/mowers', title: 'Бензокосы' },
      { url: '/chainsaw', title: 'Бензопилы' },
      { url: '/welding_machine', title: 'Сварочные аппараты' },
      { url: '/showers', title: 'Летние души' }
    ],
  },
  сatalog: {
    cardData : [
      { imgSrc: green, title: 'Теплицы', url: '/greenhouses' },
      { imgSrc: pavilion, title: 'Беседки', url: '/pavilion' },
      { imgSrc: mowers, title: 'Бензокосы', url: '/mowers' },
      { imgSrc: chainsaw, title: 'Бензопилы', url: '/chainsaw' },
      { imgSrc: welding, title: 'Сварочные аппараты', url: '/welding_machine' },
      { imgSrc: showers, title: 'Летние души', url: '/showers' }
    ],
    itemsData : [
      { iconClass: "fas fa-american-sign-language-interpreting", title: "Официальный представитель.", description: "Все товары лучшие в своей ценовой категории. Официальные поставщики SHTENLI и PROFI в Беларуси." },
      { iconClass: "fas fa-luggage-cart", title: "Доставка с любую точку Беларуси.", description: "Своя курьерская служба. Курьер заинтересован доставить товар в целосности." },
      { iconClass: "fas fa-certificate", title: "Весь товар сертифицирован и имеет гарантию.", description: "Только официальные поставщики и производители товаров, такие как: Германия, Польша, Россия." }
    ],
  },
};

export default state;
