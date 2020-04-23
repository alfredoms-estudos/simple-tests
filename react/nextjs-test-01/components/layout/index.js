import { Fragment } from 'react';
import Head from 'next/head';

import Menu from '../menu';
import styles from './index.module.css';

const Layout = ({ children }) => {
    return(
        <div className={styles.container}>
            <Head>
                <title>Teste Simples #01 - NEXT.js</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Menu/>

            <main className={styles.mainSection}>
                { children }
            </main>

        </div>
    );
}

export default Layout;