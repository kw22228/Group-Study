import currentPage from '../router/currentPage';

export default class Component {
    props;
    handler;
    state;

    constructor(props = {}, handler = {}) {
        this.props = props;
        this.handler = handler;

        this.setup();
        this.setEvent();
    }

    template() {
        return '';
    }

    setup() {}

    setProps(props) {
        this.props = props;
    }

    setEvent() {}

    addEvent(eventType, selector, callback) {
        const children = [...document.querySelectorAll(selector)];

        const isTarget = target => children.includes(target) || target.closest(selector);

        document.addEventListener(eventType, e => {
            if (!isTarget(e.target)) return false;

            callback(e);
        });

        return this;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        currentPage.Page.render();
    }
}
