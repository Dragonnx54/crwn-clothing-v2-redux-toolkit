import styles from './cart-item.module.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={`${styles.cartItemContainer}`}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={`${styles.itemDetails}`}>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
