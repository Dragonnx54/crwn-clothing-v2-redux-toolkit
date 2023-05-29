import { useNavigate } from 'react-router-dom';

import styles from './directory-item.module.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className={`${styles.directoryItemContainer}`} onClick={onNavigateHandler}>
      <div className={`${styles.backgroundImage}`} style={{'backgroundImage': `url(${imageUrl})`}}/>
      <div className={`${styles.body}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
