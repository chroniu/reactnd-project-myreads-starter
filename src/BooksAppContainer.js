import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ShelfItemData from './ShelfItemData';
import BooksApp from './BooksApp';
import categories from './categories';
/**
   @description Container component for the app
*/
class BooksAppContainer extends React.Component {
    state = {
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
            <BooksApp chgCategory={this.changeCategoryFn}
                      categories={this.state.categories}
                      items={this.state.items}/>
        );
    }
}

export default BooksAppContainer;
