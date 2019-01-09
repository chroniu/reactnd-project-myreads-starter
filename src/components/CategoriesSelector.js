/**
   A component that prints a series of 
*/

import React from 'react';
import PropTypes from 'prop-types';

const CategoriesSelector = ({categories, chgCategoryFn}) => {
    return(
        <nav className="categories-menu">
          <ul>
            {categories.map((category) =>(
                <li key={category.id}>
                  <a href={category.img}>
                    <i className="fa fa-home fa-2x"></i>
                    <span className="nav-text">
                      {category.message}
                    </span>
                  </a>
                </li>                
            ))}
          </ul>
        </nav>
    );
};



CategoriesSelector.propTypes = {
//    categories: PropTypes.,
    changeCategoryFn: PropTypes.func.isRequired
};

export default CategoriesSelector;





