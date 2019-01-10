import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';
import ShelfItemData from '../ShelfItemData';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Typeahed from 'react-typeahead';
import suggestions from './suggestions.js';
import Suggestor from 'ssuggestor';


// from https://codepen.io/anon/pen/NeLjYK?editors=1111
const theme = {
    "root": "input-group ss-root",
    "input": "form-control ss-input",
    "arrow": "ss-arrow",
    "close": "ss-remove",
    "list": "dropdown-menu ss-list",
    "item": "dropdown-item",
    "activeItem": "ss-over-item"
};


/**
   @description Components that permits the user to search new itens and change their categories
*/
class SearchPage  extends React.Component{

    state = {
        items : []
    }

    /**
       Uses the input from the user to search for itens and fetchs the result to show in the page
     */
    requestSearch = (text) => {
        if( text === undefined) return;

        text = text.trim();
        console.log(text);

        BooksAPI.search(text).then(data =>{
            this.setState({
                items: new ShelfItemData.processShelfItemsFromAPI(data)
            });
            console.log(data);
        });
    }

    componentDidMount(){

        
    }

    render(){
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                  <Suggestor 
                    list={suggestions}
                    autoFocus
                    placeholder="Search by title or author"

                    onChange={value => {this.requestSearch(value);}}/>
                </div>
              </div>
              <div className="search-books-results">
                <Shelf items={this.state.items}
                       category='Founded Books'
                       chgCategory={this.props.chgCategory}
                       categories={this.props.categories}/>
                
              </div>
            </div>  
        );
    }
};

SearchPage.PropTypes = {
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

export default SearchPage;

