import React from 'react';
import PropTypes from 'prop-types';


/**
   A component that shows a list of categories
*/
const CategoriesList = ({categories, chgShowedCategories}) => {
    return(
        <div className="categories-list">
        <button className="button-category"
                onClick={(e) => chgShowedCategories('all')}>All
        </button>
          {categories.filter(c => c.id !== 'None').map(
              ({id, message}) => 
                  <button key={id}
                          className="button-category"
                          onClick={(e) => chgShowedCategories(id)}>{message}</button>
          )}
        </div>
    );
};

CategoriesList.propTypes ={
    categories: PropTypes.array,
    changeCategoryList: PropTypes.func
};

export default CategoriesList;
