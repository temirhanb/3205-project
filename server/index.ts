import * as path from "path";
import express, {Router} from "express";
import {filterUsers, getAll} from "./controller";
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3001;
const router = Router();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
router.get("/api/users", getAll);
router.post("/api/users", filterUsers);

app.listen(PORT, () => {
  console.log("Server start on port: " + PORT);
});
