/**
   Represents a item of the shelf 
*/
class ShelfItemData{
    /**
       @constructor
       @param {string} id - The id of the item
       @param {string} shelf - The shelf that the item belongs
       @title {string} title - title of the item
       @param {string} subtitle - subtitle of the item 
       @param {string array} authors - the authors of the item
       @param {string array} imageLinks - the url of the thumbnails of the item
     */
    constructor({id, shelf, title, subtitle, authors, imageLinks}){
        this.id = id;
        this.shelf = shelf;
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.imageLinks=imageLinks;
    }

   
    /**
       @description A helper function that transforms the items fetched from the server to a list of ShelfItemData objects
       @param {data} - The data fetched from the server
       @returns {ShelfItemData array} a list of ShelfItem Data
    */
    static processShelfItemsFromAPI(data){
        let items = [];
        data.forEach( book => items.push(new ShelfItemData(book)));
        return items;
    }
}

export default ShelfItemData;
