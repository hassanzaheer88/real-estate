import express from 'express';
import { test } from '../controllers/user.controller.js'; //always write .js , otherwise error will occur.

const router = express.Router();

router.get('/test' , test)


export default router;