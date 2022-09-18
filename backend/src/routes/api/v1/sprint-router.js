import express from 'express'
import { SprintController } from '../../../controllers/api/sprint-controller.js'

export const router = express.Router()

const controller = new SprintController()

router.get('/:id/sprints', (req, res, next) => controller.getSprints(req, res, next))

router.post('/:id/sprints', (req, res, next) => controller.createSprint(req, res, next))
