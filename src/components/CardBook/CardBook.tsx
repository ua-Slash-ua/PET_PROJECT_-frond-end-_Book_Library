import styles from './CardBook.module.css'
import Image from "next/image";
import img from '../../../public/R.jpg'
export type Book = {
    id: number
    title: string;
    author: string;
    genre: string;
    datePublished: string;
    create_at: string;
};

type CardBookProps = {
    book: Book;
};

export default function CardBook({ book }: CardBookProps) {
    return (
        <div className={styles.cart_item}>
            <div className={styles.cart_item_image}>
                <Image src={img} alt="book"/>
            </div>
            <div className={styles.cart_item_info}>
                <span>Книга №{book.id}</span>
                <span>Назва: {book.title}</span>
                <span>Автор: {book.author}</span>
                <span>Жанр: {book.genre}</span>
                <span>{new Date(book.datePublished).toLocaleDateString()}</span>
            </div>
        </div>
    );
}