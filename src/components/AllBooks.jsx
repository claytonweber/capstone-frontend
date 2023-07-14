import React, { useState, useEffect} from 'react';
import  { Link } from 'react-router-dom';

let books = [
    {
        name: 'The Golden Compass',
        author: 'Philip Pullman'
    }
]

export default function AllBooks() {
    console.log(books);

    let [allBooks, setAllBooks ] = useState(books);
    let [searchQuery, setSearchQuery] = useState("");

    let filteredBooks = allBooks.filter((singleBook) => {
        let lowercaseName = singleBook.name.toLowerCase();
        let lowercaseQuery = searchQuery.toLowerCase();

        if(lowercaseName.includes(lowercaseQuery)) {
            return singleBook;
        }
    })
    return (
        <div>
            <form>
                <label htmlFor="search-query">Search</label>
                <input
                    name="search-query"
                    type="text"
                    placeholder="enter text"
                    value={searchQuery}
                    onChange={(event) => {
                        console.log(event.target.value);
                        setSearchQuery(event.target.value)
                    }}
                ></input>
            </form>
            {
                filteredBooks.length ? filteredBooks.map((singleBook, index) => {
                    return (
                        <div key={index}>
                            <h2>Title: {singleBook.name}</h2>
                            <h2>Author: {singleBook.author}</h2>
                        </div>
                    )
                }) : <p>Loading Books</p>
            }
            <h2>books</h2>
        </div>
    )
}

