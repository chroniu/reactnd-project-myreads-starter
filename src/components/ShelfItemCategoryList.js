import React from 'react';
import PropTypes from 'prop-types';
import categories from '../categories.js';

/**
   Component that represents the list of categories that a item can have
 */
const ShelfItemCategoryList= ({itemId, actualCategory, changeCategoryFn}) =>{
    return(
        <div className="book-shelf-changer">
          <select key={itemId} onChange={event => changeCategoryFn(itemId, event.target.value)}>
            <option disabled>Move To</option>
            {categories.map(({id, message}) =>
                            <option key={id} value={id} disabled={id===actualCategory}
                                    selected={id===actualCategory}>
                               {message}
                             </option>
                            )}
          </select>
    </div>);
};

ShelfItemCategoryList.propTypes = {
    itemId: PropTypes.string.isRequired,
    actualCategory: PropTypes.string
};

export default ShelfItemCategoryList;
