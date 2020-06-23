
import React, { lazy, useState } from 'react';
import { SelectorComponent } from '../selector';
import loadable from '@loadable/component';

import HelpComponent from '../options/help';

const DefaultComponent = () => <div>default content</div>;

const simpleFunc = async (args) => {
    const {default: asyncSimpleFunc } = await import('simplefunc/func');

    return await asyncSimpleFunc(args);
}

const COMPONENTS_LIST = {
    'Default': DefaultComponent,
    'Help': HelpComponent,
    'Details': React.lazy(() => import('detailsboard/component'))
};

export const ComponentHub = () => {
    let [componentName, setComponent] = useState('Default')    

    const CurrentComponent = COMPONENTS_LIST[componentName];
    
    return (
        <div>
            <button onClick={() => {
                debugger;
                simpleFunc('testset');
            }}>Teste de Função Simples Lazy</button>
            <SelectorComponent setComponent={setComponent}></SelectorComponent>
            <React.Suspense fallback="Carregando ...">
                <CurrentComponent></CurrentComponent>
            </React.Suspense>
        </div>
    );
};
