import  React from 'react';
import styles from './UsefullInfo.module.css';
import UsefullInfoItem from './UsefullInfoItem/UsefullInfoItem'

function UsefullInfo({ books, resources }) { 
    return (
        <>
        <h2>Usefull literature</h2>
        <ol className={styles.s}> 
        {books.map(({ id, name, url }) => (
        <li className={styles.s} key={id}><UsefullInfoItem id={id} name={name} url={url}/></li>
        ))}
        </ol>
        <h2>Usefull resources</h2>
        <ol className={styles.s}> 
        {resources.map(({ id, name, url }) => (
        <li className={styles.s} key={id}><UsefullInfoItem id={id} name={name} url={url}/></li>
        ))}
        </ol>
        </>
      );
   }   
 export default UsefullInfo