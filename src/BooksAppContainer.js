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
            ShelfItemData.processShelfItemsFromAPI(data).then(
                items => 
                     this.setState({
                         items: items,
                         categories:categories
                     })
            );});
    }

   
    chgShowedCategories = (id) => {
        this.setState((state, props) =>{
            let ccategories = state.categories.slice(0);
            if(id === 'all'){
                ccategories.filter(c => c.id!=='None').forEach(s => s.show = true);
                
            }else{
                ccategories.filter(c => c.id===id).forEach(s => s.show = true);
                ccategories.filter(c => c.id!==id).forEach(s => s.show = false);
            }
            return{
                categories: ccategories                   
            };
        });
    }
       
    /**
       @description Changes the shelf of an item
       @param bookId - the id of the item
       @param newCategory - new shelf category of the item
     */
    changeCategoryFn = (bookId, newCategory) => {
        newCategory = (newCategory === "None" ? "" : newCategory);

        BooksAPI.update(bookId, newCategory).then(res => {
            console.log(res);
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
        return(
            <BooksApp chgCategory={this.changeCategoryFn}
                      categories={this.state.categories}
                      items={this.state.items}
                      chgShowedCategories={this.chgShowedCategories}/>
        );
    }
}

export default BooksAppContainer;
