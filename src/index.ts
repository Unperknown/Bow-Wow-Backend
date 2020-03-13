import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';

const PORT = 8080;

const app = new Koa();

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});