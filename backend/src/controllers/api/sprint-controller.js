import createError from "http-errors"
import { Sprint } from "../../models/sprint.js"

/**
 * Encapsulates a controller.
 */
export class SprintController {
  /**
   * Gets user data.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getSprints(req, res, next) {
    try {
      const sprints = await Sprint.find()
      res.status(200).json(sprints)
    } catch (error) {
      next(error)
    }
  }

  async createSprint(req, res, next) {
    try {
      const sprint = new Sprint({
        userId: req.params.id,
        task: req.body.task,
        requirement: req.body.requirement,
        testStatus: req.body.testStatus,
        estimatedTime: req.body.estimatedTime,
        actualTime: req.body.actualTime,
        iteration: req.body.iteration,
      })
      await sprint.save()
      res.status(201).json({success: 'Sprint has been created.'})
    } catch (error) {
        next(error)
    }
  }
}
