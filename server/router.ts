import {Router} from "express";
import timeout from 'connect-timeout'
import {filterUsers, getAll} from "./controller";

const router = Router();

router.get('/api/users', getAll);
router.post('/api/users',timeout('5s'), filterUsers);

export default router;
