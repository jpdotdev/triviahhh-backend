const express = require('express')
const { addScore, getScores, deleteScore } = require('../controllers/scoreController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// add score
router.post('/', addScore)

// get score
router.get('/', getScores)

// delete score
router.delete('/:id', deleteScore)



module.exports = router