import PageCore from '../core/PageCore';

import AddTitle from '../components/AddTitle';
import List from '../components/List';

export default class TodoList extends PageCore {
    setup() {
        this.AddTitle = new AddTitle();
        this.List = new List();
    }

    template() {
        return /* html */ `
            <div class='addTitleArea'>${this.AddTitle.template()}</div>
            <div class='listArea'>${this.List.template()}</div>
        `;
    }
}
