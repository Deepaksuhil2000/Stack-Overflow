import express from 'express'

import { postAnswer, deleteAnswer } from '../controller/Answers.js'
import auth from '../middileware/auth.js'

const router = express.Router();

router.patch('/post/:id', postAnswer)
router.patch('/delete/:id',auth, deleteAnswer)
export default router;
