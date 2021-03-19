import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputCase from '../InputCase/InputCase';
import styles from './App.module.css';

class App extends React.Component {
  render () {
    const items = [
      {
        value:'Написать новое приложение',
        isDone: true
       },
      {
        value:'Выполнить задание к уроку',
        isDone: false
      },
      {
        value:'Прогуляться',
        isDone: false
      }
    ];
    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>Список важных дел:</h1>
      <InputCase />
      <ItemList items ={items} />
      <Footer count = {3}/>
      </div>);
  }
};

export default App;
