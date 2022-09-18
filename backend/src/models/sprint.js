import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import validator from 'validator'

const { isEmail } = validator

const schema = new mongoose.Schema({
  task: {
    type: String
  },
  requirement: {
    type: String
  },
  testStatus: {
    type: String
  },
  estimatedTime: {
    type: String
  },
  actualTime: {
    type: String
  },
  iteration: {
    type: Number
  }
})


export const User = mongoose.model('User', schema)
