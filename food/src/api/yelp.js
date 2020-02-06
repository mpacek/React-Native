import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer vfhPFQEGIuFhrprcWT3kS0O_ptfJPrWLhOnlDdRO5S-JYtk0B84DKN6QUMzi6lSZDojn0HkYTGvk80coZJQAOc0LDumT36myo92RRkuWtTbGN2ErK0lRcL590yI7XnYx',
  },
});
