const request = require('request');

request.post(
  'http://localhost:5000/activity', {
    json: {
      type: 'MESSAGE_CREATE',
      api_key: '12345',
    }
  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }
);