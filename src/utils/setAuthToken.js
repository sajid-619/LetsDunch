import axios from 'axios';

const setAuthToken = (Authorization) => {
  if (Authorization) {
    axios.defaults.headers.common['X-Fields'] = Authorization;
  } else {
    delete axios.defaults.headers.common['X-Fields'];
  }
};
export default setAuthToken;
