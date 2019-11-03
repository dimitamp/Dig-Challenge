import ky from 'ky';
import {ToasterBottom} from '../components/common/ui';


const serverUrl = process.env.API_URL;

export const prefixUrl = route => `${serverUrl}/${route}`;

export const api = ky.create({
  timeout: 20000,
  hooks: {
    beforeRequest: [
      req => {
          req.headers = {
            ...req.headers,
            ...(req.body instanceof FormData
              ? {}
              : {'content-type': 'application/json'})
          };
      }
    ],
    afterResponse: [
      async response => {
        try {
          if (!response.ok) {
            const error = await response.clone().json();
            ToasterBottom.show({
             intent: 'danger',
             message: error.message || 'An error has occured!',
         });
           }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
        return response;
      }
    ]
  }
});
