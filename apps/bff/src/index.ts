import Koa from 'koa';
import Router from '@koa/router';
import koaBody from 'koa-body';
import cors from 'koa2-cors';
import pino from 'pino';

const app = new Koa();
const router = new Router();
const log = pino();

router.get('/health', (ctx) => {
  ctx.body = { ok: true };
});

app
  .use(cors())
  .use(koaBody({ multipart: true }))
  .use(router.routes())
  .use(router.allowedMethods());

const port = process.env.PORT ? Number(process.env.PORT) : 8788;
app.listen(port, () => {
  log.info({ port }, 'BFF listening');
});
