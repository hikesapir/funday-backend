const boardService = require('./board.service.js')
const logger = require('../../services/logger.service')
const socketService = require('../../services/socket.service')
const userService = require('../user/user.service.js')



// GET LIST
async function getBoards(req, res) {
    try {
        var filterBy = req.query
        const boards = await boardService.query(filterBy)
        res.json(boards)
    } catch (err) {
        logger.error('Failed to get boards', err)
        res.status(500).send({ err: 'Failed to get boards' })
    }
}

// GET BY ID 
async function getBoardById(req, res) {
    try {
        const boardId = req.params.id;
        const board = await boardService.getById(boardId)
        res.json(board)
    } catch (err) {
        logger.error('Failed to get board', err)
        res.status(500).send({ err: 'Failed to get board' })
    }
}

// POST (add board)
async function addBoard(req, res) {

    try {
        const board = req.body
        const addedBoard = await boardService.add(board)
        res.json(addedBoard)
    } catch (err) {
        logger.error('Failed to add board', err)
        res.status(500).send({ err: 'Failed to add board' })
    }
}

// PUT (Update board)
async function updateBoard(req, res) {
    try {
        const board = req.body;
        // console.log(req.body.groupId);
        const updatedBoard = await boardService.update(board)
        // console.log(req.session.user, 'user?');
        // var user = await userService.getById(review.byUserId)
        // socketService.broadcast({
        //     type: 'update-task', data: groupId,
        //     task,
        // })
        // socketService.broadcast({ type: 'update-board', data: board, room: board._id, userId })
        res.json(updatedBoard)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(500).send({ err: 'Failed to update board' })

    }
}

// DELETE (Remove board)
async function removeBoard(req, res) {
    try {
        const boardId = req.params.id;
        const removedId = await boardService.remove(boardId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove board', err)
        res.status(500).send({ err: 'Failed to remove board' })
    }
}

module.exports = {
    getBoards,
    getBoardById,
    addBoard,
    updateBoard,
    removeBoard
}
