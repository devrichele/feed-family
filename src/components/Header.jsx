import styles from './Header.module.css'
import { GiFamilyTree } from "react-icons/gi"



export function Header(){
    return(
        <header className={styles.header}>
            <strong>Feed Family</strong>
            <GiFamilyTree />

        </header>
    )
}