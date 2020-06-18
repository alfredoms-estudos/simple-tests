import React from "react";
import ReactDOM from "react-dom";

import { ReactComponent } from "./components";

class ReactWebComponent extends HTMLElement {
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
            this.attachShadow({ mode: 'open' }).appendChild(this.app);
        }

        ReactDOM.render(<ReactComponent />, this.app);
    }
}

window.customElements.define('react-web-component', ReactWebComponent);
