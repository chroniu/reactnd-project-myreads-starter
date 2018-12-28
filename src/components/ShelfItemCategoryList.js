import React from 'react';
import PropTypes from 'prop-types';
import categories from '../categories.js';

/**
   Component that represents the list of categories that a item can have
 */
const ShelfItemCategoryList= ({itemId, actualCategory}) =>{
        
    return(
        <div className="book-shelf-changer">
          <select>
            <option disabled>Move To</option>
            {categories.map(({id, message}) =>
                            <option value={id} disabled={id===actualCategory}
                                    selected={id===actualCategory}>
                               {message}
                             </option>
                            )}
          </select>
    </div>);
};

ShelfItemCategoryList.propTypes = {
    id: PropTypes.string.isRequired,
    actualCategory: PropTypes.string
};

export default ShelfItemCategoryList;
