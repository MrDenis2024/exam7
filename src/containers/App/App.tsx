import './App.css';
import {useState} from 'react';
import {itemMenu} from '../../type';

import hamburgerImage from '../../assets/hamburger.jpg';
import cheeseburgerImage from '../../assets/cheeseburger.jpg';
import friesImage from '../../assets/fries.jpg';
import coffeeImage from '../../assets/coffee.jpg';
import teaImage from '../../assets/tea.jpg';
import colaImage from '../../assets/cola.jpg';
import Item from '../../components/Item/Item';

const App = () => {
  const [menu, setMenu] = useState<itemMenu[]>([
    {name: 'Hamburger', img: hamburgerImage, price: 80, count: 0},
    {name: 'Cheeseburger', img: cheeseburgerImage, price: 90, count: 0},
    {name: 'Fries', img: friesImage, price: 45, count: 0},
    {name: 'Coffee', img: coffeeImage, price: 70, count: 0},
    {name: 'Tea', img: teaImage, price: 50, count: 0},
    {name: 'Cola', img: colaImage, price: 40, count: 0},
  ]);


  return (
    <>
      {menu.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
};

export default App;
