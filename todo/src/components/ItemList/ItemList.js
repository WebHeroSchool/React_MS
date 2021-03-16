import React from 'react';
import Item from '../Item/Item'

const ItemList = ({todoItem}) => ( <ul>
<li><Item todoItem = {todoItem} /></li>
<li><Item todoItem = {'Выполнить задание к уроку'}/></li>
<li><Item todoItem = {'Прогуляться'}/></li>
</ul>);

export default ItemList;
