# Exemplo simples com NEXT.js (#1)

- O **NEXT.js** permite a criação de aplicações usando **SSR** (*Server Side Rendering*) e **SSG** (*Static Site Generator*);

- No **NEXT.js**, as páginas são servidas dentro da pasta **./pages**. Assim:
    - O arquivo *./pages/index.js* aponta, no navegador, para a raiz (em *http://\<endereco>:/*);
    - Arquivos criados dentro de *./pages* apontam para páginas acessadas com seus nomes. *./pages/arquivo.js* poderá ser acessada por meio de *http://\<endereco>:/arquivo*. No caso anterior, poderíamos também colocar a página em *./pages/arquivo/index.js* - isso é, o **NEXT.js** considera os arquivos *index.js* a raiz de cada pasta;

- Para criar links entre as páginas, deve-se usar o componente **Link** do **NEXT.js** (disponível em **'next/link'**). Isso faz com que os componentes sejam carregados sem recarregar a página toda - isso é, sem ação do navegador. Caso seja necessário o carregamento de uma página externa, pode-se usar o elemento **\<a href>** (com ação do navegador, nesse caso);
