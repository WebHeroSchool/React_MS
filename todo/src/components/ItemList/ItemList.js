import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';


const ItemList = ({items,onClickDone,onClickDelete}) => (<ul className ={styles.itemList}>
  {items.map(item => <li key={item.value} className = {styles.item}>
        <Item value = {item.value}
        isDone = {item.isDone}
        id = {item.id}
        onClickDone = {onClickDone}
        onClickDelete = {onClickDelete}
        />
  </li>)}
</ul>);

ItemList.defaultProps = {
    item: [{
        value: 'Задачи не найдены.',
        isDone: false
    }]
  }

ItemList.propTypes = {
    value: PropTypes.array.isRequired
  };


export default ItemList;
