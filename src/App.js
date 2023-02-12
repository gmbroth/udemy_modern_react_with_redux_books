
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

    const [books, setBooks,] = useState([]);

    const editBookById = (id, title) => {
        const b = books.map((book) => {
            if (book.id === id) {
                return {...book, title};
            }
            return book;
        });
        setBooks(b);
    };

    const deleteBookById = (id) => {
        setBooks(
            books.filter((book) => {
                return book.id !== id;
            })
        );
    }

    const createBook = (title) => {
        const book = [
            ...books,
            { id: Math.round(Math.random() * 9999), title }
        ];
        setBooks(book);
    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
