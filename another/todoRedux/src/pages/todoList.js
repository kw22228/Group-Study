import AddTitle from '../components/AddTitle';
import List from '../components/List';
import Component from '../core/Component';

import store from '../redux';
import { todoSetup } from '../redux/action';

export default class TodoList extends Component {
    setup() {
        store.dispatch(
            todoSetup({
                TodoList: [{ Todo: ['sleeping', 'swimming'] }],
            })
        );

        store.subscribe(() => {
            this.render();
            this.mounted();
        });
    }

    template() {
        return /* html */ `
        <div class='addTitleArea'></div>
        <div class='listArea'></div>
    `;
    }

    mounted() {
        new AddTitle(document.querySelector('.addTitleArea'));
        new List(document.querySelector('.listArea'));
    }
}
