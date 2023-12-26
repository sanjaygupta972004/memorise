
import { Router } from 'express';

import { userAuthSchema } from "../validate/userAuth.validate.js";


import {
   register,
   login ,
   getUserProfile,
} from '../controllers/user.controller.js';
import {validateUserAuthRegister } from '../middleware/auth.middleware.js';
import { jwtVerify } from '../middleware/authJwtVerify.middleware.js';

const router = Router();

router.route('/register').post(validateUserAuthRegister(userAuthSchema), register);
router.route('/login').post(login);

// secure route   
 router.route('/user-profile').get(jwtVerify, getUserProfile);





export default router;