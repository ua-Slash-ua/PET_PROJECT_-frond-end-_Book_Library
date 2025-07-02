'use client'
import styles from './FilterItemCheckbox.module.css'
import {useState} from "react";

type filterItemProps = {
    name: string
    options: string[]
}
export default function FilterItemCheckbox({name, options}: filterItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFilter = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <div className={styles.catalog_filter}>
            <div className={styles.catalog_filter_head} onClick={toggleFilter}>
                <div className={styles.catalog_filter_name}>{name}</div>
                <div className={styles.catalog_filter_icon}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"/>
                    </svg>
                </div>

            </div>
            {isOpen &&
                (<div className={styles.catalog_filter_options}>
                    {options.map((option) => (
                        <label key={option} htmlFor={'checkbox_' + option} className={styles.catalog_filter_option}>
                            <input type="checkbox" name={'checkbox_' + option} className={styles.catalog_filter_checkbox} value={option}/>
                            {option}
                        </label>
                    ))}
                </div>)}
        </div>
    )
}