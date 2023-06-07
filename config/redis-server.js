const redis = require('redis');

const client = redis.createClient({
  url: 'redis://alice:foobared@awesome.redis.server:6380',
});

module.exports= client;