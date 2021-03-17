import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputCase from '../InputCase/InputCase';
import './App.css';

const todoItem = 'Написать новое приложение';

const App = () => {
const items = [
  {
    value:'Написать новое приложение'
   },
  {
    value:'Выполнить задание к уроку'
  },
  {
    value:'Прогуляться'
  }
];
return (
  <div className="wrap">
  <h1 className= "wrap_title">Список важных дел:</h1>
  <InputCase />
  <ItemList items = {items} />
  <Footer count = {3}/>
  </div>);
}


export default App;
