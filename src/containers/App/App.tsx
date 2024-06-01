import './App.css';
import {useState} from 'react';
import {itemMenu} from '../../type';

import hamburgerImage from '../../assets/hamburger.jpg';
import cheeseburgerImage from '../../assets/cheeseburger.jpg';
import friesImage from '../../assets/fries.jpg';
import coffeeImage from '../../assets/coffee.jpg';
import teaImage from '../../assets/tea.jpg';
import colaImage from '../../assets/cola.jpg';
import ItemMenu from '../../components/ItemMenu/ItemMenu';

const App = () => {
  const [menu, setMenu] = useState<itemMenu[]>([
    {name: 'Hamburger', img: hamburgerImage, price: 80, count: 0, id: '1'},
    {name: 'Cheeseburger', img: cheeseburgerImage, price: 90, count: 0, id: '2'},
    {name: 'Fries', img: friesImage, price: 45, count: 0, id: '3'},
    {name: 'Coffee', img: coffeeImage, price: 70, count: 0, id: '4'},
    {name: 'Tea', img: teaImage, price: 50, count: 0, id: '5'},
    {name: 'Cola', img: colaImage, price: 40, count: 0, id: '6'},
  ]);


  return (
    <div className='app'>
      <div>

      </div>
      <ItemMenu menu={menu} />
    </div>
  );
};

export default App;
