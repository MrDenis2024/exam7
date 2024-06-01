import React from 'react';
import {itemMenu} from '../../type';
import './Item.css';

interface Props {
  item: itemMenu;
}

const Item: React.FC<Props> = ({item}) => {
  return (
    <div className='item-card'>
      <img className='card-img' src={item.img} alt={item.name}/>
      <div>
        <p className='item-name'>{item.name}</p>
        <p>Цена: {item.price} сом</p>
      </div>
    </div>
  );
};

export default Item;