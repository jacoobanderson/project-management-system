import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  userId: {
    type: String
  },
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


export const Sprint = mongoose.model('Sprint', schema)
