import { useDispatch, useSelector } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import styles from './checkout-item.module.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className={`${styles.checkoutItemContainer}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={`${styles.baseSpan}`}> {name} </span>
      <span className={`${styles.quantity}`}>
        <div className={`${styles.arrow}`} onClick={removeItemHandler}>&#10094;</div>
        <span className={`${styles.value}`}>{quantity}</span>
        <div className={`${styles.arrow}`} onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className={`${styles.baseSpan}`}> {price}</span>
      <div className={`${styles.removeButton}`} onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
