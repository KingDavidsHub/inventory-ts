import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import dotenv from 'dotenv';
dotenv.config();


// Create Redis client
const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASS
});

const RedisStore = new connectRedis({
    client: redisClient,
  }) // Get RedisStore class

// // Create Redis store using `new`
// const redisStore = new RedisStore({
//   client: redisClient,
// });


export { redisClient, RedisStore };
