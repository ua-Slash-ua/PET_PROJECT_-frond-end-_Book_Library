'use client'
import {useEffect, useState} from "react";
import {getBook} from "@/api/book/getBooks";
import CardBook, {Book} from "@/components/CardBook/CardBook";
import styles from './NewsBlock.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function NewsBlock() {
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchBooks() {
            try {
                const books = await getBook({
                    per_page: 3,
                    sort:'desc'
                });
                console.log(books)
                if (books) {
                    setBooks(books);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error('Помилка при завантаженні книг:', err);
                setError(true);
            }
        }

        fetchBooks();
    }, []);

    return (
        <>
            <div className={styles.news_block_container}>
                <h3>Новинки</h3>
                <div className={styles.news_block_preview}>
                    {error ? (
                        <p>Не вдалося завантажити книги 😢</p>
                    ) : books.map(book => (
                        <CardBook key={book.id} book={book}/>
                    ))}

                </div>
            </div>
        </>
    )
}