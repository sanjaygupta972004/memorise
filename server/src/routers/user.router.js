
import { Router } from 'express';

import { userAuthSchema } from "../validate/userAuth.validate.js";


import {register,login } from '../controllers/user.controller.js';
import {validateUserAuthRegister } from '../middleware/auth.middleware.js';

const router = Router();

router.route('/register').post(validateUserAuthRegister(userAuthSchema), register);
router.route('/login').post(login);



export default router;