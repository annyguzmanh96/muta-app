import styles from './LogoMuta.module.css';

export function LogoMuta(){

    return(
        <div className={styles.allContainer}>
            <div className={styles.figuresContainer}>
                <p className={styles.square}>M</p>
                <p className={styles.circle}>U</p>
                <div className={styles.pyrContainer}>
                    <div className={styles.pentagonContainer}><div className={styles.pentagon}></div><p className={styles.pentagonText}>T</p></div>
                    <div className={styles.rhombContainer}><div className={styles.rhomb}><p className={styles.rhombText}>A</p></div></div>
                </div>
            </div>
        </div>
    )

}