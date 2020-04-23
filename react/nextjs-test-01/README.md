# Exemplo simples com NEXT.js (#1)

- Para criar uma nova aplicação usando **NEXT.js**, basta usar o seguinte comando:

> *npm init next-app **\<app-name>***

- O **NEXT.js** permite a criação de aplicações usando `SSR` (*Server Side Rendering*) e `SSG` (*Static Site Generator*);

- No **NEXT.js**, as páginas são servidas dentro da pasta **./pages**. Assim:
    - O arquivo *./pages/index.js* aponta, no navegador, para a raiz (em *http://\<endereco>:/*);
    - Arquivos criados dentro de *./pages* apontam para páginas acessadas com seus nomes. *./pages/arquivo.js* poderá ser acessada por meio de *http://\<endereco>:/arquivo*. No caso anterior, poderíamos também colocar a página em *./pages/arquivo/index.js* - isso é, o **NEXT.js** considera os arquivos *index.js* a raiz de cada pasta;

- Para criar links entre as páginas, deve-se usar o componente `Link` do **NEXT.js** (disponível em `'next/link'`). Isso faz com que os componentes sejam carregados sem recarregar a página toda - isso é, sem ação do navegador. Caso seja necessário o carregamento de uma página externa, pode-se usar o elemento **\<a href>** (com ação do navegador, nesse caso);

- Para possibilitar o uso de **CSS** em arquivos separados do componente, podemos usar [CSSModules](https://github.com/css-modules/css-modules). Para isso, devemos criar um arquivo com o final `.module.css`, que deve conter apenas classes puras. Depois, basta importar o arquivo **CSS** e usá-lo como no exemplo abaixo:

```javascript
    import styles from './index.module.css';

    const Layout = ({ children }) => {
        return(
            <div className={styles.container}>
            ...
        );
    }
```

- O `CSSModules` coloca um *identificador único* para cada classe. Assim, se você olhar sua página no browser, vai perceber o nome de cada classe está no padrão *nome_da_classe__\<identificador>*. Assim, não precisamos nos preocupar com conflitos entre nomes de classes;

- Usando o componente `Link` do **NEXT.js**, será necessário implementar a *pseudo-classe* "*active*" manualmente, pois o componente não a suporta. Para isso, um exemplo de implementação é:

```javascript
    import Link from 'next/link';
    import { useRouter } from 'next/router';

    import styles from './index.module.css';

    const ExemploActive = () => {
        const router = useRouter();

        const putActiveClass = (link) => {
            console.log(router.pathname);
            return router.pathname == link ? styles.activeItem : '';
        }

        return(
            <div>
                <ul>
                    <li><Link href='/'><a className={putActiveClass('/')}>Home</a></Link></li>
                    <li><Link href='/dashboard'><a className={putActiveClass('/dashboard')}>Dashboard</a></Link></li>
                </ul>
            </div>
        );
    }

    export default ExemploActive;
```

- O componente de mais alto nível é o `App`, o qual deve estar em `pages/_app.js`:

```javascript
    export default function App({ Component, pageProps }) {
        return <Component {...pageProps} />
    }
```

- Arquivos de `CSS` globais devem ser importados em `pages/_app.js`. Não se pode importar arquivos de `CSS` globais em nenhum outro lugar. O arquivo com os `CSS's` pode ser importado diretamente em `_app.js`:

```javascript
    import '../assets/styles/global.css';

    export default function App ({Component, pageProps}) {
        return <Component {...pageProps} />;
    }
```

