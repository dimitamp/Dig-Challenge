import {api, prefixUrl} from '../lib/api-adapter';

const productsApi = api.extend({prefixUrl: prefixUrl('')});

export const getProducts = () => productsApi.get('products').json();
