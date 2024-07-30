import styles from '@/styles/404.module.scss'

const Custom404 = () => {
    return(
        <div className={styles.error}>
            <img src="img/404.png" alt="404" className={styles.error__image} />
            <div>Halaman Tidak Ditemukan</div>
        </div>
    )
}
export default Custom404