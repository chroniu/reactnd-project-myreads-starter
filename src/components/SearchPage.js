import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';
import ShelfItemData from '../ShelfItemData';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import suggestions from './suggestions.js';
import Autosuggest from 'react-autosuggest';
import parse from 'autosuggest-highlight/parse';
import '../App.css';

/**
   @description Returns an array of pairs of index where each pair contain
   the position of start/end of the substring word in text
   @param {string} word - the substring to search for
   @param {string} text - the string to search
   @returns {array} [[index_start, index_end], ...]
*/
function match(text, word){
    let starts = [];
    let index = 0;
    while(index < text.length){
        const position = text.substring(index).indexOf(word);
        if(position === -1)
            break;
        starts.push(position + index);
        index = position + index + word.length;
        
    }
    return starts.map(p => [p, p + word.length]);
}


/* based on codepen.io/moroshko/pen/LGNJMy  and https://codesandbox.io/s/k1m4q28pnr*/

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
    if (escapedValue === '') {
        return [];
    }
    
    const regex = new RegExp(escapedValue, 'i');
    return suggestions.filter(suggestion => regex.test(suggestion)).slice(0, 10);
}

function getSuggestionValue(suggestion) {
  return suggestion;
}


/**
   @description Components that permits the user to search new itens and change their categories
*/
class SearchPage  extends React.Component{

    state = {
        items: [],
        suggestions: [],
        value: '',
        searchingMetaData: {key:"foundedBooks", name:''}
    }

    /**
       @description Uses the input from the user to search for itens and fetchs the result to show in the page
     */
    requestSearch = (event) => {
        event.preventDefault();
        if(this.state.value === undefined || this.state.value === ""){
            this.setState({
                items: [],
                searchingMetaData: {key:"foundedBooks", name:''}
            });
            return;
        }
        this.setState({
            searchingMetaData: {key:"foundedBooks", name:'Searching...'}
        });
        
        BooksAPI.search(this.state.value).then(data =>{
            ShelfItemData.processShelfItemsFromAPI(data).then(
                items => this.setState({items,
                                        searchingMetaData: {key:"foundedBooks",
                                                            name:`${items.length} Books founded`}
                                       }));
        }).catch(error =>{
            this.setState({
                items: [],
                searchingMetaData: {key:"foundedBooks", name:'No Books founded'}
            });
        });
    }

    onChange = (event, { newValue, method }) => {
        if(newValue===''){
            this.setState({
                items: [],
                value: newValue,
                searchingMetaData: {key:"foundedBooks", name:''}
            });
        }else{
            this.setState({
                value: newValue,
            });
        }
    };
    
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    
    renderSuggestion = (suggestion) => {
        const matches = match(suggestion.toLowerCase(),
                              this.state.value.toLowerCase());
        const parts = parse(suggestion, matches);

        return (
            parts.map((part, index) => {
                return part.highlight ? 
                    (<span className="highlight" key={String(index)}>
                       {part.text}
                     </span>)
                    :(<span key={String(index)}>
                        {part.text}
                      </span>
                     );
            })
        );
    };

    render(){
        const inputProps= {placeholder:"Search by title or author",
                           onChange:this.onChange,
                           value:this.state.value};
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                  <form onSubmit={this.requestSearch}>
                  <Autosuggest  
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    onSuggestionSelected={this.requestSearch}
                    inputProps={inputProps}/>
                  </form>
                </div>
              </div>
              <div className="search-books-results">
                <Shelf items={this.state.items}
                       category={this.state.searchingMetaData}
                       chgCategory={this.props.chgCategory}
                       categories={this.props.categories}/>
              </div>
            </div>  
        );
    }
};

SearchPage.propTypes = {
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

export default SearchPage;
