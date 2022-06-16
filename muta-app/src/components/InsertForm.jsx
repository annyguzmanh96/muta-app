//FORMULARIO A LLENAR PARA INSERTAR
import styles from './InsertForm.module.css';

export function InsertForm(){

    return(
        <div className={styles.allContainer}>
            <form className={styles.insertForm}>
                <label className={styles.listLabel}>Punto de recolección</label>
                <select className={styles.list}>
                    <option hidden selected>Escoge un punto de recolección</option>
                    <option value='item 1'>Arana Express</option>
                    <option value='item 2'>Tienda Los Hermanos Florian</option>
                    <option value='item 3'>Burger Stock</option>
                </select>

                <div className={styles.Title}><p>ACU</p></div>
                <div className={styles.dataContainer}>
                    <div>
                        <label>Peso</label>
                        <input 
                            className={styles.leftInput}
                            type='number'
                            min='0'
                            placeholder='0 kg'
                        />
                    </div>
                    <div>
                        <label>Pimpinas con aceite</label>
                        <input
                            className={styles.input}
                            type='number'
                            min='0'
                            placeholder='0 Uni'
                        />
                    </div>
                </div>

                <div className={styles.Title}><p>Pimpinas Vacías</p></div>
                <div className={styles.dataContainer}>
                    <div>
                        <label>PET</label>
                        <input
                            className={styles.leftInput}
                            type='number'
                            min='0'
                            placeholder='0 Uni'
                        />
                    </div>
                    <div>
                        <label>Pasta</label>
                        <input
                            className={styles.input}
                            type='number'
                            min='0'
                            placeholder='0 Uni'
                        />
                    </div>
                </div>

                <div className={styles.Title}><p>Trampa de Grasa</p></div>
                <div className={styles.dataContainer}>
                    <div className={styles.lastInputContainer}>
                        <label>Peso</label>
                        <input
                            className= {styles.leftInput} 
                            type='number'
                            min='0'
                            placeholder='0 kg'
                        />
                    </div>
                </div>
            </form>
        </div>
    )

}