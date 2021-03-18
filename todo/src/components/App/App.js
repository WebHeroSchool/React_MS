import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputCase from '../InputCase/InputCase';
import styles from './App.module.css';


const App = () => {
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
<div className={styles.body}>
  <div className={styles.wrap}>
  <h1 className={styles.title}>Список важных дел:</h1>
  <InputCase />
  <ItemList items = {items} />
  <Footer count = {3}/>
  </div>
</div>);
}


export default App;
