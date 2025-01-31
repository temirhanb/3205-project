import express from "express";
import cors from "cors";
import router from "./router";
import {delayResponse} from "./timeout";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(delayResponse);

app.use(router);

app.listen(PORT, () => {
  console.log("Server start on port: " + PORT);
});
