import React from 'react';
import {itemMenu} from '../../type';
import './Item.css';

interface Props {
  item: itemMenu;
  onAddItem: React.MouseEventHandler
}

const Item: React.FC<Props> = ({item, onAddItem}) => {
  return (
    <div className='item-card' onClick={onAddItem}>
      <img className='card-img' src={item.img} alt={item.name}/>
      <div>
        <p className='item-name'>{item.name}</p>
        <p>Цена: {item.price} сом</p>
      </div>
    </div>
  );
};

export default Item;