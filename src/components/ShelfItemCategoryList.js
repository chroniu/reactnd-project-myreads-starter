import React from 'react';
import PropTypes from 'prop-types';

/**
   @description Component that gives a list of categories with a selector
 */
const ShelfItemCategoryList= ({itemId, actualCategory, chgCategoryFn, categories}) =>{
    return(
        <div className="book-shelf-changer">
          <select key={itemId} onChange={event => chgCategoryFn(itemId, event.target.value)}>
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
    actualCategory: PropTypes.string,
    chgCategoryFn: PropTypes.func
};

export default ShelfItemCategoryList;
