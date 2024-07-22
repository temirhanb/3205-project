import {Router} from "express";
import {filterUsers, getAll} from "./controller";

const router = Router();

router.get('/api/users', getAll);
router.post('/api/users', filterUsers);

export default router;
