/**
   Represents a ShelfItem Data 
*/
class ShelfItemData{
    constructor({id, shelf, title, subtitle, authors, imageLinks}){
        this.id = id;
        this.shelf = shelf;
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.imageLinks=imageLinks;
    }

   
    /**
       return a list of SHelfItem Data
    */
    static processShelfItemsFromAPI(data){
        let items = [];
        data.forEach( book => items.push(new ShelfItemData(book)));
        return items;
    }
}

export default ShelfItemData;
