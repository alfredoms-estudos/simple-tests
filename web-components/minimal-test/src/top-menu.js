class TopMenu extends HTMLElement {
    constructor() {
        super();
        this.menuContainer = null;
    }

    addItem(item) {
        const newItem = document.createElement('div');
        newItem.innerHTML = item.text;
        this.menuContainer.appendChild(newItem);
    }

    connectedCallback() {
        this.menuContainer = document.createElement('div');
        this.menuContainer.setAttribute('id', 'top-menu');

        const item1 = document.createElement('div');
        const item2 = document.createElement('div');
        const item3 = document.createElement('div');

        item1.innerHTML = 'Home';
        item2.innerHTML = 'About';
        item3.innerHTML = 'Logout';

        this.menuContainer.appendChild(item1);
        this.menuContainer.appendChild(item2);
        this.menuContainer.appendChild(item3);

        this.attachShadow({ mode: 'open' }).appendChild(this.menuContainer);
    }
}

window.customElements.define('top-menu', TopMenu);