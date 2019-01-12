import React from 'react';
import PropTypes from 'prop-types';
import ShelfItemData from '../ShelfItemData';
import ShelfItemCategoryList from './ShelfItemCategoryList';

/**
   @description - Represents an item from the shelf
*/
const ShelfItem = ({item, chgCategory, categories}) => {
    const onDragStart = (ev) => {
        console.log("dragStart: ", item.id);
        ev.dataTransfer.setData("id", item.id);
    };
    
    return(
        <li key={item.id}>
          <div className="book"
               draggable onDragStart = {(e) => onDragStart(e)}>
            <div className="book-top">
              <div className="book-cover" 
                   style={{ width: 128, height: 188, backgroundImage: `url(${item.imageLinks.thumbnail})`}}>
              </div>
              <ShelfItemCategoryList key={item.id}
                                     itemId={item.id}
                                     actualCategory={item.shelf}
                                     chgCategory={chgCategory}
                                     categories={categories}/>
            </div>
            <div className="book-title">{item.title}</div>
            <div className="book-authors">{item.authors}</div>
          </div>
        </li>
    );
};

ShelfItem.propTypes = {
    item: PropTypes.instanceOf(ShelfItemData).isRequired,
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.array
};


export default ShelfItem;
