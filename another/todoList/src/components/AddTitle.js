import Component from '@core/Component';

export default class AddTitle extends Component {
  template() {
    return /* html */ `
        <input id="todoTitle" type="text" value="" />
        <button id="addTitleBtn">추가</button>
    `;
  }

  setEvent() {
    const { onAddTitle } = this.props;

    this.addEvent('click', '#addTitleBtn', onAddTitle);
  }
}
