import React from 'react';
import PropTypes from 'prop-types';
//import * as BooksAPI from './BooksAPI.js';
import Shelf from './Shelf.js';

/**
   A component that represents a List Of Lists of Books
*/
const ShelfList = ({categories, items, changeCategoryFn}={categories:[], items:[]}) => {
    console.log(categories);
    console.log(items);
    
    return(
          <div className="list-books-content">
            {
                categories.map(({id, message}) =>
                               <Shelf category={message} items={items.filter(item=>item.shelf===id)} key={id} changeCategoryFn={changeCategoryFn}/>)
            }
          </div>
    );
};

ShelfList.propTypes = {
//    labels: PropTypes.object,
//    books: PropTypes.object
};

export default ShelfList;
