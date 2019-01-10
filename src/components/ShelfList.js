import React from 'react';
import PropTypes from 'prop-types';
import ShelfContainer from './ShelfContainer.js';

/**
   @description A component that represents a list Shelfs
*/
const ShelfList = ({categories, items, chgCategory}={categories:[], items:[], chgCategory:null}) => {
    return(
        <div className="list-books-content">{
            categories.filter(c => c.show).map(
                ({id, message}) =>
                    <ShelfContainer category={{key:id, name:message}}
                           items={items.filter(item=>item.shelf===id)}
                           key={id}
                           chgCategory={chgCategory}
                           categories={categories}/>)
        }
        </div>
    );
};

ShelfList.propTypes = {
    categories: PropTypes.array.isRequired,
    items: PropTypes.array,
    chgCategory: PropTypes.func.isRequired
};

export default ShelfList;
