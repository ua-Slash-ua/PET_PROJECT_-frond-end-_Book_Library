import LogoComponent from "@/components/Header/Logo/LogoComponent";
import styles from "./Header.module.css";
import MenuNav from "@/components/Header/MenuNav/MenuNav";

export default function Header(){
    return(
        <header className={styles.header}>
            <LogoComponent/>
            <MenuNav/>
        </header>
        )
}