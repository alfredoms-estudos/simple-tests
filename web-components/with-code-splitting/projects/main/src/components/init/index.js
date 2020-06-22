import React from 'react';
import ReactDOM from "react-dom";
import retargetEvents from 'react-shadow-dom-retarget-events';

import { ComponentHub } from "..";

export class InitComponent extends HTMLElement {
    constructor() {
        super();
        this.app = null;
    }

    connectedCallback() {
        this.mountApp();
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this.app);
    }

    mountApp() {
        if (!this.app) {
            this.app = document.createElement('div');
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(this.app);
            retargetEvents(shadowRoot);
        }

        ReactDOM.render(<ComponentHub />, this.app);
    }
}
