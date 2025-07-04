import {PAGES} from "@/config/pages.config";
import {typeMenuItem} from "@/types/meny.types";

export const MenuItems:typeMenuItem[] = [
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
