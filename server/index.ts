import express from "express";
import cors from "cors";
import router from "./router";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(router);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log("Server start on port: " + PORT);
});
