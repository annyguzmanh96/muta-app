import { Link } from 'react-router-dom';
import styles from '../components/UserLogin.module.css'
export function UserLogin(){
    
    const handleSubmit= (e)=>{
        e.preventDefault(); // SPA (Single Page Aplication)
    }

    return(
        <div> 
            <form className={styles.allContainer} onSubmit={handleSubmit}>
                <label className={styles.label}>Email</label>
                <input 
                    className={styles.input}
                    placeholder='Ingresa tu email coporativo'
                    type='email'
                    autofocus='autofocus'
                    minLength='12' 
                    maxLength='40'
                    required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />
                <label className={styles.label}>Contraseña</label>
                <input 
                    className={styles.input}
                    placeholder='Ingresa tu contraseña'
                    type='password'
                    minLength='6' 
                    maxLength='8'
                />
                <Link to='/recolecciones'>
                    <button className={styles.loginButton} type='submit'>
                        INICIAR SESIÓN
                    </button>
                </Link>
            </form>
            <p className={styles.footer}>¿Olvidaste tu contraseña? <p className={styles.click}>Haz click aquí.</p></p>
        </div>
    )

}