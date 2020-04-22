import Head from 'next/head';

import Menu from '../../components/menu';
// import './styles.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Teste Simples #01 - NEXT.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Menu/>

        <h1 className="title">
          Teste Simples #01 - NEXT.js
        </h1>

        <p className="description">
          Primeiro teste utilizando as funcionalidades mais simples do NEXT.js.
        </p>

      </main>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
