
import React, { lazy, useState } from 'react';
import { SelectorComponent } from '../selector';
import loadable from '@loadable/component';

import HelpComponent from '../options/help';
// System.config({
//     baseURL: "http://172.19.17.232:3001"
// });

// System.config({
//     paths: {
//       'details-module': 'http://172.19.17.232:3001/details.bundle.js'
//     }
// });

const DefaultComponent = () => <div>default content</div>;

const COMPONENTS_LIST = {
    'Default': DefaultComponent,
    'Help': HelpComponent,
    'Details': React.lazy(() => import('detailsboard/component'))
    // 'Details': loadable(() => System.
    // import('details-module'))
//    'Help': lazy(() => import('../options/help')),
    // 'Details': async () => await import('../options/details')
    // 'Details': loadable(() => System.import('0.bundle.js'))
    // 'Details': loadable(() => import('http://172.19.17.232:3001/0.bundle.js'))
    // lazy(() => import('../options/details'))
};

export const ComponentHub = () => {
    let [componentName, setComponent] = useState('Default')    

    const CurrentComponent = COMPONENTS_LIST[componentName];
    
    return (
        <div>
            <SelectorComponent setComponent={setComponent}></SelectorComponent>
            <React.Suspense fallback="Carregando ...">
                <CurrentComponent></CurrentComponent>
            </React.Suspense>
        </div>
    );
};
