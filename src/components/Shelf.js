import React from 'react';
import PropTypes from 'prop-types';
import ShelfItem from './ShelfItem';
import categories from '../categories';
/*
  A component that represents a List of Books 
*/
const Shelf = ({items, category, changeCategoryFn}={items:[],category:''}) =>{
    //items = (items === undefined ? [] : items);
    return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{category}</h2>
            <div className="bookshelf-books">          
              <ol className="books-grid">
                {items.map (item => (
                    <ShelfItem item={item}
                               changeCategoryFn={changeCategoryFn}
                               key={items.id}/>))}
              </ol>
            </div>
          </div>
    );
};


Shelf.propTypes = {
//    bookListCategory: PropTypes.string.isRequired,
    //    books: PropTypes.array.isRequired
    //changeCategoryFn
};

export default Shelf;
