import React from 'react';
import ReactDOM from 'react-dom';
import BooksAppContainer from './BooksAppContainer';
import './index.css';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <BooksAppContainer />
    </BrowserRouter>, document.getElementById('root')
);
