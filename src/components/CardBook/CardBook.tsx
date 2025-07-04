import styles from './CardBook.module.css'
import Image from "next/image";
import img from '../../../public/R.jpg'
import Link from "next/link";
import {PAGES} from "@/config/pages.config";
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
            <Link href={PAGES.BOOKS(book.id)}>
                <div className={styles.cart_item_image}>
                    <Image src={img} alt="book"/>
                </div>
                <div className={styles.cart_item_info}>
                    <span className={styles.cart_item_id}>№{book.id}</span>
                    <span className={styles.cart_item_con_title}>{book.title}</span>
                    <span className={styles.cart_item_con}>Автор: {book.author}</span>
                    <span className={styles.cart_item_con}>Жанр: {book.genre}</span>
                    <span className={styles.cart_item_date}>{new Date(book.datePublished).toLocaleDateString()}</span>
                </div>
            </Link>

        </div>
    );
}