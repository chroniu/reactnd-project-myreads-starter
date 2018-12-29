import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ShelfList from './components/ShelfList';
import ShelfItemData from './ShelfItemData';
import SearchPage from './components/SearchPage';
import categories from "./categories";
import {Route, Link} from 'react-router-dom';


class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        categories: categories,
        items: []
    }

    componentDidMount(){
        /* Requests the data from the server */
        BooksAPI.getAll().then(data =>{
            this.setState({
                items: ShelfItemData.processShelfItemsFromAPI(data),
                categories:categories
            });
        });
    }

    changeCategoryFn = (bookId, newCategory) => {
        newCategory = (newCategory === "None" ? "" : newCategory);

        BooksAPI.update(bookId, newCategory).then(res => {
            const items = this.state.items.filter(book=> book.id !== bookId);

            BooksAPI.get(bookId).then(data =>{
                const newItem = new ShelfItemData(data);
                newItem.shelf = newCategory;
                items.push(newItem);
                this.setState({items: items});
            });
        });
    }
    
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({history})=>(
            <SearchPage changeCategoryFn={(bookId, newCategory) =>{this.changeCategoryFn(bookId, newCategory);
                                                                   history.push('/');}}/>

        )}/>
        <Route exact path='/' render={() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ShelfList items={this.state.items}
                         categories={this.state.categories}
                         changeCategoryFn={this.changeCategoryFn}>
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
}

export default BooksApp;
