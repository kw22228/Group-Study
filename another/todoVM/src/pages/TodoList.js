import Component from '../core/Component';

import AddTitle from '../components/AddTitle';
import List from '../components/List';

export default class TodoList extends Component {
    setup() {
        this.AddTitle = AddTitle();
        this.List = List();
    }

    template() {
        let tp = /* html */ `
            <div class='addTitleArea'>${this.makeComponent(this.AddTitle.cpName)}</div>
            <div class='listArea'>${this.makeComponent(this.List.cpName)}</div>
        `.trim();

        return this.mounted(tp);
    }

    mounted(tp) {
        return tp //
            .replace(this.makeComponent(this.AddTitle.cpName), this.AddTitle.template)
            .replace(this.makeComponent(this.List.cpName), this.List.template);
    }
}
