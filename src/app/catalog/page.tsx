import styles from "./Catalog.module.css";
import FilterBook from "@/components/FilterBook/FilterBook";


export default function Catalog() {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_hero}>
                <h1 className={styles.catalog_title}>
                    Каталог книг для справжніх читачів
                </h1>
            </div>
            <div className={styles.catalog_content}>
                <FilterBook/>
            </div>
        </div>
    );
}
