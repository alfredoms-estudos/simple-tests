import Head from 'next/head';

import Menu from '../../components/menu';

const Dashboard = () => {
    return (
        <div className="container">
            <Head>
                <title>Teste Simples #01 - NEXT.js - Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Menu/>

                <h1 className="title">
                    Dashboard
                </h1>
            </main>
        </div>
    );
}

export default Dashboard;