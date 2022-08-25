import express from 'express'

import  { AskQuestion, deleteQuestion, voteQuestion } from '../controller/Question.js'
import { getAllQuestions } from '../controller/Question.js'
import auth from '../middileware/auth.js'
const router = express.Router()

router.post('/Ask',auth, AskQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id', deleteQuestion );
router.patch('/vote/:id', voteQuestion);

export default router 