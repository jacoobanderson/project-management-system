import createError from 'http-errors'
import { User } from '../../models/user.js'

/**
 * Encapsulates a controller.
 */
export class UserController {
  /**
   * Creates an object depending on type.
   *
   * @param {object} type type of data used.
   * @returns {object} Object of user data.
   */
  createUserDataObject (type) {
    return {
      id: type.id,
      username: type.username,
      firstname: type.firstName,
      lastname: type.lastName,
    }
  }

  /**
   * Gets user data.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getUserData (req, res, next) {
    try {
      const user = await User.findById(req.params.id)
      const data = this.createUserDataObject(await user)

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

}
