import Component from '../core/Component';

import AddTitle from '../components/AddTitle';
import List from '../components/List';

export default class TodoList extends Component {
    setup() {}

    template() {
        return /* html */ `
            <div class='addTitleArea'>${AddTitle()}</div>
            <div class='listArea'>${List()}</div>
        `.trim();
    }
}
