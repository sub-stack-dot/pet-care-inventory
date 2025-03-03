import express from 'express';
import {  signin, signup, updatePassword } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.put('/updatePassword/:userId', updatePassword)

export default router;

