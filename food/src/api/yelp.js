import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer igq-qJbIv9BS2pM7NofNw_SYpKOJn9i41Hjde6ziIWS5TONoux9Z67Tkz-LkcYiTy-02wnQLh7jyOBgEevMBwVpoz56uJfewF1Ko9wherpDuA9rMaOwEeHmr8Zk8XnYx',
  },
});
