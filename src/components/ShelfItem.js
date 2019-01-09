import React from 'react';
import PropTypes from 'prop-types';
import ShelfItemData from '../ShelfItemData';
import ShelfItemCategoryList from './ShelfItemCategoryList';

import { DragSource } from 'react-dnd';

const ShelfItem = ({item, changeCategoryFn, categories}) => {
    return(
        <li key={item.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
                 style={{ width: 128, height: 188, backgroundImage: `url(${item.imageLinks.thumbnail})`}}>
            </div>
            <ShelfItemCategoryList key={item.id}
                                   itemId={item.id}
                                   actualCategory={item.shelf}
                                   chgCategory={changeCategoryFn}
                                   categories={categories}/>
          </div>
          <div className="book-title">{item.title}</div>
          <div className="book-authors">{item.author}</div>
        </div>
        </li>
    );
};

ShelfItem.propTypes = {
    item: PropTypes.instanceOf(ShelfItemData).isRequired,
    chgCategory: PropTypes.func.isRequired
};


export default ShelfItem;
