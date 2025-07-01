import {PAGES} from "@/config/pages.config";
import {MenuItem} from "@/types/meny.types";

export const MenuItems:MenuItem[] = [
    {
        name:'Головна',
        href:PAGES.HOME
    },
    {
        name:'Каталог',
        href:PAGES.CATALOG
    },
    {
        name:'Контакти',
        href:PAGES.CONTACTS
    }
]
