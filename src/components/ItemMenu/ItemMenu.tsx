import React from 'react';
import Item from '../Item/Item';
import {itemMenu} from '../../type';

interface Props {
  menu: itemMenu[];
}

const ItemMenu: React.FC<Props> = ({menu}) => {
  return (
    <div className='item-menu'>
      <h2>Меню</h2>
      <div className='menu'>
        {menu.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default ItemMenu;