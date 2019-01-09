import React from 'react';
import ShelfList from './components/ShelfList';
import SearchPage from './components/SearchPage';
import {Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const BooksApp = ({items, categories, chgCategory}={items:[],categories:[],chgCategory:null}) =>{
    return(
    <div className="app">
        <Route path='/search' render={({history})=>(
            <SearchPage
              categories={categories}
              chgCategory={(bookId, newCategory) =>{chgCategory(bookId, newCategory);
                                                                   history.push('/');}}/>
        )}/>
        <Route exact path='/' render={() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ShelfList items={items}
                         categories={categories}
                         chgCategory={chgCategory}>
              </ShelfList>
            </div>
        )}/>
        <div className="open-search">
          <Link className='open-search' to='/search'>
            <button>Add a book</button>
          </Link>
        </div>

        
      </div>);
};

BooksApp.proptypes = {
    items: PropTypes.array.isRequired,
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.object
};


export default BooksApp;
