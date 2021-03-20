import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';


const ItemList = ({items,onClickDone}) => (<ul className ={styles.itemList}>
  {items.map(item => <li key={item.value} className = {styles.item}>
        <Item value = {item.value} isDone = {item.isDone} onClickDone ={onClickDone}/>
  </li>)}
</ul>);

export default ItemList;
