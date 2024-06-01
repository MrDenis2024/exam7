import React from 'react';
import Item from '../Item/Item';
import {itemMenu} from '../../type';

interface Props {
  menu: itemMenu[];
  addItem: (id: string) => void;
}

const ItemMenu: React.FC<Props> = ({menu, addItem}) => {
  return (
    <div className='item-menu'>
      <h2>Меню</h2>
      <div className='menu'>
        {menu.map((item) => (
          <Item key={item.id} item={item} onAddItem={() => addItem(item.id)}/>
        ))}
      </div>
    </div>
  );
};

export default ItemMenu;