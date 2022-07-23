import config from "config";
import connect from "./utils/connect";
import express from "express";
import routes from "./routes";
const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.listen(port, async () => {
    console.log("App is running");
    await connect();
    routes(app)
});