import express from "express";
import cors from "cors";
import router from "./router";
import timeout from 'connect-timeout'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(timeout('5s'))
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(PORT, () => {
  console.log("Server start on port: " + PORT);
});
