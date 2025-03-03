import express from 'express';
import { SignUp } from '../controllers/auth.controller';
import SignUp from '../../frontend/src/pages/SignUp';
const router=express.Router()

router.post('/SignUp', SignUp)
export default router
