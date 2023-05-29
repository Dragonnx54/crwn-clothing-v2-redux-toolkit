import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import styles from './cart-dropdown.module.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className={`${styles.cartDropdownContainer}`}>
      <div className={`${styles.cartItems}`}>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className={`${styles.emptyMessage}`}>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler} style={{'marginTop': 'auto'}}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
