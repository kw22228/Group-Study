class CurrentPage {
    #Page;

    constructor() {
        this.#Page = null;
    }

    set Page(page) {
        this.#Page = page;
    }

    get Page() {
        return this.#Page;
    }

    render() {
        this.#Page.render();
    }
}

export default new CurrentPage();
