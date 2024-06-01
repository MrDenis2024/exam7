import React from 'react';
import {itemMenu} from '../../type';

interface Props {
  menu: itemMenu[]
}

const OrderPrice: React.FC<Props> = ({menu}) => {
  const totalPrice = menu.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div className='order-price'>
      Цена заказа: {totalPrice} сом
    </div>
  );
};

export default OrderPrice;