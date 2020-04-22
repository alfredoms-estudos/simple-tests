import Link from 'next/link';

const Menu = () => {
    return(<>
        Links:
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
    </>);
}

export default Menu;