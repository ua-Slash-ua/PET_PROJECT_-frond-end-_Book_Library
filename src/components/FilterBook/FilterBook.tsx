import styles from './FilterBook.module.css'
import FilterItemCheckbox from "@/components/FilterBook/FilterItemCheckbox/FilterItemCheckbox";
import {useEffect, useState} from "react";
import {getFilter} from "@/api/book/getFilter";
export default function FilterBook() {
    const [genres, setGenres] = useState<Record<string, number>>({});
    const [authors, setAuthors] = useState<Record<string, number>>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchFilters() {
            const genreResult = await getFilter('genre');
            const authorResult = await getFilter('author'); // або 'authot', якщо так у тебе в бекенді
            if (typeof genreResult === 'string') setError(genreResult);
            else setGenres(genreResult);

            if (typeof authorResult === 'string') setError(authorResult);
            else setAuthors(authorResult);
        }

        fetchFilters();
    }, []);

    return (
        <div className={styles.catalog_filter}>
            <span className={styles.catalog_filter_title}>Фільтр:</span>
            <input type="text" placeholder="Введіть назву книги" />
            <FilterItemCheckbox key="genre" name="Жанр" options={genres} />
            <FilterItemCheckbox key="author" name="Автор" options={authors} />
            <div className={styles.catalog_filter_action}>
                <button className={styles.catalog_filter_search}>Пошук</button>
            </div>
        </div>
    );
}
