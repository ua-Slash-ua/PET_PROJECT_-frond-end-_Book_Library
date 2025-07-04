'use client'
import styles from "./Catalog.module.css";
import FilterBook from "@/components/FilterBook/FilterBook";
import CardBook, {Book} from "@/components/CardBook/CardBook";
import {useEffect, useState} from "react";
import {getBook} from "@/api/book/getBooks";
import CatalogComponent from "@/components/Catalog/CatalogComponent";


export default function Catalog() {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBooks() {
            const result = await getBook();
            if (typeof result === 'string') {
                setError(result);
            } else {
                setBooks(result);
            }
        }

        fetchBooks();
    }, []);

    return (
        <>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <CatalogComponent books={books} />
        </>
    );
}

