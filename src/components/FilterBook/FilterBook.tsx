import styles from './FilterBook.module.css'
import FilterItemCheckbox from "@/components/FilterBook/FilterItemCheckbox/FilterItemCheckbox";
export default function FilterBook(){
    return(
        <div className={styles.catalog_filter}>
            <span className={styles.catalog_filter_title}>
                Фільтр:
            </span>
            <input type="text" placeholder="Введіть назву книги"/>
            <FilterItemCheckbox key ='name' name='Author' options={['one','two']} />
            <div className={styles.catalog_filter_action}>
                <button className={styles.catalog_filter_search}>
                    Пошук
                </button>
            </div>

        </div>
    )
}