import {html, css, LitElement} from 'lit';

export class SidebarElement extends LitElement {
    static properties = {
        name: {type: String},
    };
    constructor() {
        super();
        this.name = 'Somebody';
    }
    createRenderRoot() {
        return this;
    }
    render() {
        return html /* html */`
            <a href="#" class="brand"><i class="bx bxs-smile icon"></i> AdminSite</a>
            <ul class="side-menu">
                <li><a href="#" class="active"><i class="bx bxs-dashboard icon"></i> Dashboard</a></li>
                <li class="divider" data-text="main">Main</li>
                <li>
                    <a href="#"><i class="bx bxs-inbox icon"></i> Elements <i class="bx bxs-chevron-right icon-right"></i></a>
                    <ul class="side-dropdown">
                        <li><a href="#">Alert</a></li>
                        <li><a href="#"></a>Badges</li>
                        <li><a href="#"></a>Breadcrumbs</li>
                        <li><a href="#"></a>Button</li>
                    </ul>
                </li>
                <li><a href="#"><i class="bx bxs-chart icon"></i> Charts</a></li>
                <li><a href="#"><i class="bx bxs-widget icon"></i> widget</a></li>
                <li class="divider" data-text="table and forms">Table and forms</li>
                <li><a href="#"><i class="bx bxs-table icon"></i> Tables</a></li>
                <li>
                    <a href="#"><i class="bx bxs-notepad icon"></i> Forms <i class="bx bxs-chevron-right icon-right"></i></a>
                    <ul class="side-dropdown">
                        <li><a href="#">Basic</a></li>
                        <li><a href="#">Select</a></li>
                        <li><a href="#">Checkbox</a></li>
                        <li><a href="#">Radio</a></li>
                    </ul>
                </li>
            </ul>
        `;
    }
}
customElements.define('side-bar', SidebarElement);