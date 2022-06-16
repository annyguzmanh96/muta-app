import { InsertForm } from "../components/InsertForm";
import { BiArrowBack } from 'react-icons/bi';
import styles from './InsertModal.module.css';
import { Link } from "react-router-dom";

//REGISTRO DE NUEVAS RECOLECCIONES
export function InsertModal(){

    return(
        <div className={styles.allContainer}>
            <div className={styles.titleContainer}> 
                <div className={styles.titleSubContainer}>
                    <Link to='/recolecciones'><BiArrowBack className={styles.arrowBack} size='1.4em'/></Link>
                    <header className={styles.header}>Registrar nueva recolección</header>
                </div>
            </div>
            <InsertForm/>
            <div className={styles.totalMContainer}>
                <div className={styles.totalMSubContainer}>
                    <p className={styles.total}>Total a pagar</p>
                    <p className={styles.money}>$0</p>
                </div>
            </div>
            <Link to='/recolecciones'>
                <button className={styles.createRecord} type='submit'>
                    CREAR REGISTRO
                </button>
            </Link>
        </div>
    )

}