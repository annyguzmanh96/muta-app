import { Link } from "react-router-dom";
import { RecordList } from "../components/RecordList";
import { BiUser } from 'react-icons/bi';
import { FiTruck } from 'react-icons/fi';
import { BiCube } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { MdTune } from 'react-icons/md';
import { MdAddCircleOutline } from 'react-icons/md';
import styles from './Registration.module.css';



export function Registration(){
    
    
    return(
        <div className={styles.allContainer}>
            <header className={styles.title}>
                <p>Registro de recolecciones</p>
                <MdTune className={styles.tune}size='1.3em'/>
            </header>
            
            <main>
                <RecordList />
            </main>

            <Link to='/crearRegistro'>
                <button className={styles.createRecords} type='submit'>
                    CREAR REGISTRO<MdAddCircleOutline size='1.3em' />
                </button>
            </Link>
            <footer className={styles.iconsContainer}>
                <Link to='/'><div className={styles.iconContainer}><BiUser size='2em' /> Perfil</div></Link>
                <div className={styles.iconContainer}><FiTruck size='2em' /> Recolecciones</div>
                <div className={styles.iconContainer}><BiCube  size='2em'/> Traslados</div>
                <div className={styles.iconContainer}><BsSearch size='2em' /> Buscar</div>
            </footer>
        </div>
    )

}