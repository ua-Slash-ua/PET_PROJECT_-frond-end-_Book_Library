'use client'
import {MenuItems} from "@/config/menu.config";
import MenuNavItem from "@/components/Header/MenuNav/MenuNavItem/MenuNavItem";
import styles from './MenuNav.module.css'
import {usePathname} from "next/navigation";

export default function MenuNav() {
    const pathname = usePathname()
    return (
        <nav className={styles.nav}>
            {
                MenuItems.map((menu) => (
                    <MenuNavItem key={menu.name} name={menu.name} href={menu.href} isActive={pathname === menu.href}/>
                ))
            }
        </nav>
    )
}