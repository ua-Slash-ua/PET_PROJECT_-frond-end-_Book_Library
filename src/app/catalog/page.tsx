'use client'
import styles from "./Catalog.module.css";
import FilterBook from "@/components/FilterBook/FilterBook";
import CardBook, {Book} from "@/components/CardBook/CardBook";
import {useEffect, useState} from "react";
import {getBook} from "@/api/book/getBooks";


export default function Catalog() {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBooks() {
            const result = await getBook();
            console.log(123)
            console.log(result)
            console.log(123)
            if (typeof result === 'string') {
                setError(result); // якщо повернено повідомлення про помилку
            } else {
                setBooks(result);
            }
        }

        fetchBooks();
    }, []);
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_hero}>
                <h1 className={styles.catalog_title}>
                    Каталог книг для справжніх читачів
                </h1>
            </div>
            <div className={styles.catalog_content}>
                <FilterBook/>
                <div className={styles.catalog_list}>
                    {books.map((book, index) => (
                        <CardBook key={index} book={book}/>
                    ))}
                </div>
            </div>

        </div>
    );
}
