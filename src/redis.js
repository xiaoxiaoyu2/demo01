const Redis = require('ioredis');

(async () =>{
  const options = {
    host:  '192.168.31.111',
      port: 6379,
      db: 0,
      // password: process.env.REDIS_PASSWORD || 'auth',
  };
  const client = new Redis(options);
  // await client.del('current_uid');
  const strKey = "test_uid";
  const oldValue = await client.get(strKey);
  console.log(oldValue);
  if(oldValue === null)
    await client.set(strKey, 100);

  const str = await client.get(strKey);
  console.log("uid: " + str);

  for(let i = 0; i < 100000; i++){
    const incStr = await client.incr(strKey);
    console.log("incr uid: " + Date.now() + " : " + incStr);
  }
});


