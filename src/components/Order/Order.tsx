import React from 'react';
import {itemMenu} from '../../type';
import './Order.css';
import OrderPrice from '../OrderPrice/OrderPrice';


interface Props {
  menu: itemMenu[];
  removeItem: (id: string) => void;
}

const Order: React.FC<Props> = ({menu, removeItem}) => {
  const orderItem = menu.reduce<React.ReactNode[]>((acc, item) => {
    if(item.count > 0) {
      acc.push(<div key={item.name} className='order-item'> {item.name}
        <div className='item-quantity'>
          <span>x{item.count}</span>
          <span>{item.count * item.price} сом</span>
          <button onClick={() => removeItem(item.id)} className='order-btn'>Убрать позицию</button>
        </div>
      </div>);
    }
    return acc;
  }, []);

  return (
    <div className="order">
      <h2>Заказ</h2>
      <div className='oredr-items'>
        {orderItem.length > 0 ? <div>{orderItem} <OrderPrice menu={menu}/></div> : <div>Заказов нет <p>Сделайте заказ пожалуйста!</p></div>}
      </div>
    </div>
  );
};

export default Order;