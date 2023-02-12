
import '../index.css';
import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
 
    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleSubmit = (id, title) => {
        onEdit(id, title);
        setShowEdit(false);
    };

    let content = showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>;

    return (
        <div className='book-show'>
            <img
                alt="picture of the book"
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
