import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';
import ShelfItemData from '../ShelfItemData';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchPage  extends React.Component{

    state = {
        items : []
    }
    
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
                  <input autoFocus type="text" placeholder="Search by title or author" onChange={event => {this.requestSearch(event.target.value);}}/>
                </div>
              </div>
              <div className="search-books-results">
                <Shelf items={this.state.items} category='Founded Books' changeCategoryFn={this.props.changeCategoryFn}/>
                
              </div>
            </div>  
        );
    }
};

SearchPage.PropTypes = {
    changeCategoryFn: PropTypes.func.isRequired
};

export default SearchPage;

