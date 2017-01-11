import {render} from 'react-dom';
import React from 'react';
import UserList from './components/UserList'

const users = [
  {name:'James'},
  {name:'Danielle'},
  {name:'Lucy'},
  {name:'Ernst'}
];

render(<UserList users={users}/>,document.getElementById('container'));
