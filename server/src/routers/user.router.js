
import { Router } from 'express';

import { signUp } from '../controllers/user.controller.js';
import { Login } from '../controllers/user.controller.js';

const router = Router();

router.route('/signup').post(signUp);
router.route('/login').post(Login);


export default router;