import express from 'express'
import { router as accountRouter } from './account-router.js'
import { router as userRouter } from './user-router.js'
import { router as sprintRouter } from './sprint-router.js'

export const router = express.Router()
router.use('/auth', accountRouter)
router.use('/', userRouter)
router.use('/', sprintRouter)

