import styles from "@/app/catalog/Catalog.module.css";
import FilterBook from "@/components/FilterBook/FilterBook";
import CardBook, {Book} from "@/components/CardBook/CardBook";
interface CatalogProps {
    books: Book[]
}
export default function Catalog({books}:CatalogProps){
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
    )
}