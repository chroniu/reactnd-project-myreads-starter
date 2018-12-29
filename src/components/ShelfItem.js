import React from 'react';
import PropTypes from 'prop-types';
import ShelfItemData from '../ShelfItemData';
import ShelfItemCategoryList from './ShelfItemCategoryList';

const ShelfItem = ({item, changeCategoryFn}) => {
    return(
        <li key={item.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
                 style={{ width: 128, height: 188, backgroundImage: `url(${item.imageLinks.thumbnail})`}}>
            </div>
            <ShelfItemCategoryList key={item.id} itemId={item.id}
                                   actualCategory={item.shelf}
                                   changeCategoryFn={changeCategoryFn}/>
          </div>
          <div className="book-title">{item.title}</div>
          <div className="book-authors">{item.author}</div>
        </div>
        </li>
    );
};

ShelfItem.propTypes = {
    item: PropTypes.instanceOf(ShelfItemData).isRequired,
    changeCategoryFn: PropTypes.func.isRequired
};

export default ShelfItem;
