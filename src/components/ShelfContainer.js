import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

/**
  @description A component that represents a Shelf with a Drapable event. 
*/

class ShelfContainer extends React.Component{
    state = {onDrag:false};
    
    onDrop = (ev, category, callback) =>{
//        console.log("onDrop");
        let id = ev.dataTransfer.getData("id");
        callback(id, category.key);
        this.setState({onDrag: false});
        
    }

    onDragOver = (event) => {
        event.preventDefault();
        this.setState({onDrag: true});
    }

    onDragLeave = (event) => {
        event.preventDefault();
        this.setState({onDrag: false});
 //       console.log("dragLeave", onDrag);
    }

    render(){
        return(
            <div
              className={this.state.onDrag? "bookshelf-drop-over" : "bookshelf-drop-off"}
              onDrop={(e) => this.onDrop(e, this.props.category,
                                         this.props.chgCategory)}
              onDragOver={(e) => this.onDragOver(e)}
              onDragLeave={(e) => this.onDragLeave(e)}
            >
              <Shelf {...this.props}/>
            </div>
        );
    }

}


ShelfContainer.propTypes = {
    items: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    chgCategory: PropTypes.func.isRequired,
    categories: PropTypes.object,
};

export default ShelfContainer;


