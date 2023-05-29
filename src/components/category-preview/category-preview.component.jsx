import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import styles from './category-preview.module.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className={`${styles.categoryPreviewContainer}`}>
      <h2>
        <Link className={`${styles.title}`} to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className={`${styles.preview}`}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
