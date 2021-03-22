import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Item = ({value,isDone,id,onClickDone,onClickDelete}) => (
<>
    <Checkbox
     defaultChecked
     color="primary"
     inputProps={{ 'aria-label': 'secondary checkbox' }}
     onClick = {() => onClickDone(id)}
    />
  <span className ={
  classnames ({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
  {value}
  </span>
  <DeleteOutlineIcon className ={styles.icon}
   onClick={() => onClickDelete(id)}  />
  </>
);

Item.defaultProps = {
    value: "Нет задачи"
};


export default Item;
