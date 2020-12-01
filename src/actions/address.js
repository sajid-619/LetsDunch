import { ADDRESS } from './types';

const address = (data) => {
  return {
    type: ADDRESS,
    payload: data,
  };
};

export default address;
