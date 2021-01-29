import styles from './header.module.css';

export default function Header (){
    return (
        <section className={styles.header}>
            <section>
                Jose Rosa
            </section>
            <section className={styles.menu}>
                <a className={styles.contact}>Contacts</a>
                <a>Projects</a>
            </section>
        </section>
    )
}