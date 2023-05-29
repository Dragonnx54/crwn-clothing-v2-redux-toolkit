import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './cart-icon.module.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div onClick={toggleIsCartOpen} className={`${styles.cartIconContainer}`}>
      <ShoppingIcon className='shopping-icon' />
      <span className={`${styles.itemCount}`}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
