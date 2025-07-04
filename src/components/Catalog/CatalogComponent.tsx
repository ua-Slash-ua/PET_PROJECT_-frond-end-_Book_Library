import styles from "@/app/catalog/Catalog.module.css";
import FilterBook from "@/components/FilterBook/FilterBook";
import CardBook, {Book} from "@/components/CardBook/CardBook";
import {useEffect, useState} from "react";
import {getBook} from "@/api/book/getBooks";
import {FilterQuery} from "@/utils/buildurl";
interface CatalogProps {
    books: Book[]
}
export default function CatalogComponent({books}:CatalogProps){
    const [bookList, setBookList] = useState<Book[]>([]);

    useEffect(() => {
        setBookList(books);
    }, [books]);
    async function updateBooks(filter:FilterQuery){
        let result = await getBook(filter)
        if (result){
            setBookList(result)
        }
    }
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_hero}>
                <h1 className={styles.catalog_title}>
                    Каталог книг для справжніх читачів
                </h1>
            </div>
            <div className={styles.catalog_content}>
                <FilterBook onSearch={updateBooks}/>
                <div className={styles.catalog_list}>
                    {bookList.map((book, index) => (
                        <CardBook key={index} book={book}/>
                    ))}
                </div>
            </div>

        </div>
    )
}