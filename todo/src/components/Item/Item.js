import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PropTypes from 'prop-types';

class Item extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render (){
    const {value,isDone,id,onClickDone,onClickDelete} = this.props;
    return (
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
           </>);
    }
  }

Item.defaultProps = {
    value: "Нет задачи"
};

Item.propTypes = {
  value: PropTypes.string
};


export default Item;
