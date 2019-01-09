import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ShelfList from './components/ShelfList';
import ShelfItemData from './ShelfItemData';
import SearchPage from './components/SearchPage';
import categories from "./categories";
import {Route, Link} from 'react-router-dom';
import CategoriesSelector from './components/CategoriesSelector';


const BooksApp = ({items, categories, chgCategory}={items:[],categories:[],chgCategory:null}) =>{
    return(
    <div className="app">
        <Route path='/search' render={({history})=>(
            <SearchPage changeCategoryFn={(bookId, newCategory) =>{chgCategory(bookId, newCategory);
                                                                   history.push('/');}}/>
        )}/>
        <Route exact path='/' render={() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ShelfList items={items}
                         categories={categories}
                         changeCategoryFn={chgCategory}>
              </ShelfList>
            </div>
        )}/>
        <div className="open-search">
          <Link className='open-search' to='/search'>
            <button>Add a book</button>
          </Link>
        </div>

        
      </div>);
}


export default BooksApp;
