import React from 'react';
import PropTypes from 'prop-types';
import ShelfItem from './ShelfItem';

/**
  @description A component that represents a Shelf. 
*/
const Shelf = ({items, category, chgCategory, categories}={items:[], category:{key:'',name:''}, chgCategory:null, categories:[]})=>{
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{category.name}</h2>
            <div className="bookshelf-books">          
              <ol key={category.key} className="books-grid">
                {items.map (item => (
                    <ShelfItem key={item.id}
                               item={item}
                               chgCategory={chgCategory}
                               categories={categories}/>))}
              </ol>
            </div>
          </div>
    );
};


Shelf.propTypes = {
    items: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.array,
};

export default Shelf;
