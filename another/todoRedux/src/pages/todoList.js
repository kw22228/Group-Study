import AddTitle from '../components/AddTitle';
// import List from '../components/List';
import Component from '../core/Component';

import store from '../redux';

export default class TodoList extends Component {
    setup() {}

    template() {
        return /* html */ `
        <div class='addTitleArea'></div>
        <div class='listArea'></div>
    `;
    }

    mounted() {
        new AddTitle(document.querySelector('.addTitleArea'));
        // new List(document.querySelector('.listArea'));
    }
}
