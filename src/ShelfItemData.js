import * as BooksAPI from './BooksAPI';
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
    constructor({id, shelf=null, title, subtitle, authors, imageLinks={thumbnail:''}}){
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
       @returns A promise with a {ShelfItemData array} a list of ShelfItem Data
    */
    static processShelfItemsFromAPI(data){
	return new Promise((resolve, reject) => {
	    if(data.error === "empty query")
		resolve([]);
            let items = [];
            data.forEach(book => items.push(new ShelfItemData(book)));
            
            //create  a promise for each book with unkown shelf
            let promises = items.map(
                (book) => (book.shelf == null ?
                           BooksAPI.get(book.id)
                           : 0));
	    // solve the promises and updates the result 
            Promise.all(promises).then(result =>{
                result.forEach((book, index) =>{
                    if(book !== 0)
                        items[index].shelf = book.shelf;
                });
                resolve(items);
            });
        });
    }
}

export default ShelfItemData;
