import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputCase from '../InputCase/InputCase';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value:'Написать новое приложение',
        isDone: true,
        id:1
       },
      {
        value:'Выполнить задание к уроку',
        isDone:  true,
        id:2
      },
      {
        value:'Прогуляться',
        isDone:  true,
        id:3
      }
    ],
    count: 6
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item};
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });
    this.setState ({items: newItemList});
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => {
    return item.id !== id;
    });
    this.setState({items: newItemList});
  };

  render () {
    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>Список важных дел:</h1>
      <InputCase />
      <ItemList
      items ={this.state.items}
      onClickDone={this.onClickDone}
      onClickDelete={this.onClickDelete}  />
      <Footer count = {this.state.count} />
      </div>);
  }
};

export default App;
