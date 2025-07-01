import Link from "next/link";
import {typeMenuItem} from "@/types/meny.types";
import styles from './MenuNavItem.module.css'

type menuItemProps = {
    isActive: boolean
} & typeMenuItem
export default function MenuNavItem({name, href, isActive}: menuItemProps) {

    return (
        <Link
            className={`${styles.menu_item} ${isActive ? styles.active : ''}`}
            href={href}
        >
            {name}
        </Link>
    )
}