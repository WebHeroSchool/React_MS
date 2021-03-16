import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputCase from '../InputCase/InputCase';

const todoItem = 'Написать новое приложение';

const App = () => (<div>
  <h1>Список важных дел:</h1>
  <InputCase />
  <ItemList todoItem = {todoItem} />
  <Footer count = {3}/>
  </div>
);


export default App;
