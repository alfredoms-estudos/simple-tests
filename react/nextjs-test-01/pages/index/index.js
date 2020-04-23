import { Layout } from '../../components';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
      Teste Simples #01 - NEXT.js
      </h1>

      <p className={styles.description}>
      Primeiro teste utilizando as funcionalidades mais simples do NEXT.js.
      </p>
    </Layout>
  )
}
