
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

    const [books, setBooks,] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookById = async (id, title) => {
            const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title
        });
        const b = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(b);
    };

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(
            books.filter((book) => {
                return book.id !== id;
            })
        );
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const book = [
            ...books,
            response.data,
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
