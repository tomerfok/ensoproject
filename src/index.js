// import { sequelize } from "./db/db.js";
import express, { json, urlencoded } from 'express';
// import routes from './api/api.routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded());

app.use('/api', () => {});

// await sequelize.sync();

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});