import styles from './FilterBook.module.css'
import FilterItemCheckbox from "@/components/FilterBook/FilterItemCheckbox/FilterItemCheckbox";
import {useEffect, useState} from "react";
import {getFilter} from "@/api/book/getFilter";

type FilterBookProps = {
    onSearch: (filters: {
        genre: string[];
        author: string[];
        title: string
    }) => void;
};

export default function FilterBook({onSearch}: FilterBookProps) {
    const [genres, setGenres] = useState<Record<string, number>>({});
    const [authors, setAuthors] = useState<Record<string, number>>({});
    const [title, setTitle] = useState('');
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchFilters() {
            const genreResult = await getFilter('genre');
            const authorResult = await getFilter('author');
            if (typeof genreResult === 'string') setError(genreResult);
            else setGenres(genreResult);
            if (typeof authorResult === 'string') setError(authorResult);
            else setAuthors(authorResult);
        }

        fetchFilters();
    }, []);

    const handleSearchClick = () => {
        onSearch({
            genre: selectedGenres,
            author: selectedAuthors,
            title: title
        });
    };

    return (
        <div className={styles.catalog_filter}>
            <span className={styles.catalog_filter_title}>Фільтр:</span>
            <input
                type="text"
                placeholder="Введіть назву книги"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <FilterItemCheckbox
                key="genre"
                name="Жанр"
                options={genres}
                selected={selectedGenres}
                onChange={setSelectedGenres}
            />
            <FilterItemCheckbox
                key="author"
                name="Автор"
                options={authors}
                selected={selectedAuthors}
                onChange={setSelectedAuthors}
            />
            <div className={styles.catalog_filter_action}>
                <button className={styles.catalog_filter_search} onClick={handleSearchClick}>
                    Пошук
                </button>
            </div>
        </div>
    );
}

