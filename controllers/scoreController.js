
const Score = require('../models/scoreModel')
const mongoose = require('mongoose')

// Add score to DB
const addScore = async (req, res) => {

    const {score, total} = req.body

    try {
        const user_id = req.user._id
        const scores = await Score.create({score, total, user_id})
        res.status(200).json(scores)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getScores = async (req, res) => {
 
    const user_id = req.user._id

    const scores = await Score.find({ user_id }).sort({createdAt: -1})
  
    res.status(200).json(scores)
  }


const deleteScore = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such score'})
    }
  
    const score = await Score.findOneAndDelete({_id: id})
  
    if(!score) {
      return res.status(400).json({error: 'No such score'})
    }
    res.status(200).json(score)
  }

module.exports = { addScore, getScores, deleteScore }