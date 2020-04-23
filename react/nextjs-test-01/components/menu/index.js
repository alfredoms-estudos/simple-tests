import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.css';

const Menu = () => {
    const router = useRouter();

    const putActiveClass = (link) => {
        console.log(router.pathname);
        return router.pathname == link ? styles.activeItem : '';
    }

    return(
        <div className={styles.mainMenu}>
            <ul className={styles.mainMenuItens}>
                <li><Link href='/'><a className={putActiveClass('/')}>Home</a></Link></li>
                <li><Link href='/dashboard'><a className={putActiveClass('/dashboard')}>Dashboard</a></Link></li>
            </ul>
        </div>
    );
}

export default Menu;