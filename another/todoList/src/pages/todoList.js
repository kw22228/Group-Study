import store from '@store';

import Component from '@core/Component';
import AddTitle from '@components/AddTitle';
import List from '../components/List';

export default class TodoList extends Component {
  setup() {
    store.dispatch('todoReducer');
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
