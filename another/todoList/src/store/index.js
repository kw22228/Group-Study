import Store from '@store/Store';
import reducers from '@store/reducers';

export default Object.freeze(new Store(reducers));
