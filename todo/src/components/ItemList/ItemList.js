import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const ItemList = ({items}) => (<ul className ={styles.itemList}>
  {items.map(item => <li key={item.value} className = {styles.item}>
    <div>
      <Checkbox
       defaultChecked
       color="primary"
       inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Item value = {item.value} isDone = {item.isDone}/>
      <DeleteOutlineIcon className ={styles.icon} />
    </div>
  </li>)}
</ul>);

export default ItemList;
