
const join = require('path').join;

const koa = require('koa');
const app = new koa();

const configs = [{
  name: 'user',
  db: 'demo',
  username: 'root',
  password: 'FLYgirl791008.',
  dialect: 'mysql',
  host: 'flagcaicai.f3322.net',
  port: 63003,
  modelPath: join(__dirname, 'models')
}];

const orm = require('koa-orm')(configs);

app.use(orm.middleware);

app.use(async function (ctx) {
  const { User } = ctx.orm('user');
  
  const user = await User.findAll();
  ctx.body = { user };
});

app.listen(3000);
console.log('listening on 3000');