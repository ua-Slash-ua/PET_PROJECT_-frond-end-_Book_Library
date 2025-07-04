'use client'
import styles from './FilterItemCheckbox.module.css'
import {useState} from "react";

type filterItemProps = {
    name: string;
    options: Record<string, number>;
    selected: string[];
    onChange: (selected: string[]) => void;
};
export default function FilterItemCheckbox({name, options, selected, onChange}: filterItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFilter = () => {
        setIsOpen(prev => !prev);
    };

    const handleCheckboxChange = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter(item => item !== value));
        } else {
            onChange([...selected, value]);
        }
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

            {isOpen && (
                <div className={styles.catalog_filter_options}>
                    {Object.entries(options).map(([key, value]) => (
                        <label key={key} htmlFor={`checkbox_${key}`} className={styles.catalog_filter_option}>
                            <input
                                type="checkbox"
                                id={`checkbox_${key}`}
                                name={`checkbox_${key}`}
                                className={styles.catalog_filter_checkbox}
                                value={key}
                                checked={selected.includes(key)}
                                onChange={() => handleCheckboxChange(key)}
                            />
                            {key} ({value})
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
