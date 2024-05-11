import {html, css, LitElement} from 'lit';

export class NavbarElement extends LitElement {
    static properties = {
        name: {type: String},
    };
    constructor() {
        super();
        this.name = 'Somebody';
    };
    createRenderRoot() {
        return this;
    }
    render() {
        return html /* html */ `
        <nav>
            <i class="bx bx-menu toggle-sidebar"></i>
            <form action="#">

            </form>
            <span class="divider"></span>
            <div class="profile">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                <ul class="profile-link">
                    <li><a href="#"><i class="bx bxs-user-circle icon"></i> Profile</a></li>
                    <li><a href="#"><i class="bx bxs-cog"></i> Settings</a></li>
                    <li><a href="#"><i class="bx bxs-log-out-circle"></i> Logout</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}
customElements.define('nav-bar', NavbarElement);