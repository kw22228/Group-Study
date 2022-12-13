import PageCore from '../core/PageCore';

import AddTitle from '../components/AddTitle';
import List from '../components/List';

export default class TodoList extends PageCore {
    setup() {}

    template() {
        return /* html */ `
            <div class='addTitleArea'>${AddTitle()}</div>
            <div class='listArea'>${List()}</div>
        `.trim();
    }
}
