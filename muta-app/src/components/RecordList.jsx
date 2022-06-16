import { useState } from 'react';
import dataRecords from '../data/dataRecords.json';
import { CgShapeRhombus } from 'react-icons/cg';
import styles from './RecordList.module.css';

export function RecordList(){
    const [records, setRecords]= useState(dataRecords);
   

    return(
        <div>
            <table className={styles.allTable}>
                <tbody>
                    {records.map(record=>
                        <tr  className={styles.tableRow} key={record.collectionId}>
                            <td className={styles.lineTable}>{record.state} <CgShapeRhombus className={styles.rhomb} size='1.3em'/></td>
                            <td className={styles.lineTable}>{record.collectionPoint}</td>
                            <td className={`${styles.lineTable} ${styles.id}`}>{record.collectionId}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    )
}