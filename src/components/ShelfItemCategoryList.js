import React from 'react';
import PropTypes from 'prop-types';

/**
   @description Component that gives a list of categories that the user can select to change the shelf of an item
 */
const ShelfItemCategoryList= ({itemId, actualCategory, chgCategory, categories}) =>{
    return(
        <div className="book-shelf-changer">
          <select key={itemId} onChange={event => chgCategory(itemId, event.target.value)}>
            <option disabled>Move To</option>
            {categories.map(({id, message}) =>
                            <option key={id}
                                    value={id}
                                    disabled={id===actualCategory}
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
    chgCategory: PropTypes.func,
    categories: PropTypes.object
};

export default ShelfItemCategoryList;
