
import '../index.css';
import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({ book }) {

    const [ showEdit, setShowEdit ] = useState(false);
    const { deleteBookById, } = useContext(BooksContext);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
 
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };
 
    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>;

    return (
        <div className='book-show'>
            <img
                alt="our book"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div className=''>{content}</div>
            <div className='actions'>
                <button className='edit'   onClick={handleEditClick}>Edit</button>
                <button className='delete' onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;
