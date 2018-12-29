import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf.js';

/**
   A component that represents a List ShelfItems
*/
const ShelfList = ({categories, items, changeCategoryFn}={categories:[], items:[]}) => {
    return(
        <div className="list-books-content">{
            categories.map(({id, message}) =>
                           <Shelf category={message} items={items.filter(item=>item.shelf===id)} key={id} changeCategoryFn={changeCategoryFn}/>)
        }
        </div>
    );
};

ShelfList.propTypes = {
    categories: PropTypes.array.isRequired,
    items: PropTypes.array,
    changeCategoryFn: PropTypes.func.isRequired
};

export default ShelfList;
