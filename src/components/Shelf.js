import React from 'react';
import PropTypes from 'prop-types';
import ShelfItem from './ShelfItem';

/*
  A component that represents a List of ShelfItems 
*/
const Shelf = ({items, category, changeCategoryFn}={items:[],category:''}) =>{
    //items = (items === undefined ? [] : items);
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{category}</h2>
            <div className="bookshelf-books">          
              <ol className="books-grid">
                {items.map (item => (
                    <ShelfItem key={items.id}
                               item={item}
                               changeCategoryFn={changeCategoryFn}/>))}
              </ol>
            </div>
          </div>
    );
};


Shelf.propTypes = {
    items: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    changeCategoryFn: PropTypes.func.isRequired
};

export default Shelf;
