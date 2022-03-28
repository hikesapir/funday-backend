const express = require('express')
// const { log } = require('../../middlewares/logger.middleware')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getBoards, getBoardById, addBoard, updateBoard, removeBoard, } = require('./board.controller')
const router = express.Router()

router.get('/', getBoards)
// router.get('/:id', getBoardById)
// router.post('/', requireAuth, requireAdmin, addBoard)
// router.put('/:id',  requireAuth, requireAdmin,updateBoard)
// router.delete('/:id', requireAuth, requireAdmin, removeBoard)


module.exports = router