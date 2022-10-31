import Main from './pages/main';
import Store from './store';

const store = new Store();
const mainPage = new Main('#root', store);
