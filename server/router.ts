const {Router} = require("express");
const {getAll, filterUsers} = require("./controller");

const router = Router();

router.get('/api/users', getAll);
router.post('/api/users', filterUsers);

export default router;
