
import read from './icons/read.svg';
import currentlyReading from './icons/currentlyReading.svg';
import wantToRead from './icons/wantToRead.svg';

const categories = [
    {id: "None", message:"None", show:false},
    {id: "currentlyReading", message:"Currently Reading",
     img: currentlyReading, show:true},
    {id: "wantToRead", message: "Want To Read",
     img: wantToRead, show:true},
    {id: "read", message:"Read",
     img: read, show:true}
];


export default categories;





