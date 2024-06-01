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
import Order from '../../components/Order/Order';


const App = () => {
  const [menu, setMenu] = useState<itemMenu[]>([
    {name: 'Hamburger', img: hamburgerImage, price: 80, count: 0, id: '1'},
    {name: 'Cheeseburger', img: cheeseburgerImage, price: 90, count: 0, id: '2'},
    {name: 'Fries', img: friesImage, price: 45, count: 0, id: '3'},
    {name: 'Coffee', img: coffeeImage, price: 70, count: 0, id: '4'},
    {name: 'Tea', img: teaImage, price: 50, count: 0, id: '5'},
    {name: 'Cola', img: colaImage, price: 40, count: 0, id: '6'},
  ]);

  const addItem = (id: string) => {
    setMenu((prevState) => {
      return prevState.map((item) => {
        if(item.id === id) {
          return {...item, count: item.count + 1};
        }

        return item;
      });
    });
  };

  const removeItem = (id: string) => {
    setMenu((prevState) => {
      return prevState.map((item) => {
        if(item.id === id) {
          return {...item, count: item.count - 1};
        }

        return item;
      });
    });
  };

  return (
    <div className='app'>
      <Order menu={menu} removeItem={removeItem} />
      <ItemMenu menu={menu} addItem={addItem} />
    </div>
  );
};

export default App;
