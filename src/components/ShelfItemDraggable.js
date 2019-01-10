import ShelfItem from './ShelfItem';
import PropTypes from 'prop-types';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

class ShelfItemDraggable extends React.Component{

    render(){
        returns(
            <Droppable>
              <ShelfItem key={this.props.key}
                         item={this.props.item}
                         chgCategory={this.props.chgCategory}
                         categories={this.props.categories}/>
            </Droppable>
        );
    }

}

ShelfItemDraggable.propTypes = {
    item: PropTypes.instanceOf(ShelfItemData).isRequired,
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.object
};


export default ShelfItemDraggable;
