
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy) {
    try {
        console.log('query');
        const criteria = _buildCriteria(filterBy)
        // const criteria = {}
        // const sortCriteria = _buildSortCriteria(filterBy)
        const collection = await dbService.getCollection('board')
        var boards = await collection.find(criteria).toArray()
        return boards
    } catch (err) {
        logger.error('cannot find boards', err)
        throw err
    }
}

async function getById(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        const board = await collection.findOne({ '_id': ObjectId(boardId) })
        return board
    } catch (err) {
        logger.error(`while finding board ${boardId}`, err)
        throw err
    }
}

async function add(board) {
    try {
        const collection = await dbService.getCollection('board')
        const boardId = await collection.insertOne(board)
        const addedBoard = await collection.findOne({ '_id': ObjectId(boardId.insertedId) })
        return addedBoard
    } catch (err) {
        logger.error('cannot insert board', err)
        throw err
    }
}

async function remove(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.deleteOne({ '_id': ObjectId(boardId) })
        return boardId
    } catch (err) {
        logger.error(`cannot remove board ${boardId}`, err)
        throw err
    }
}

async function update(board) {
    try {
        var id = ObjectId(board._id)
        delete board._id
        const collection = await dbService.getCollection('board')
        await collection.updateOne({ "_id": id }, { $set: { ...board } })
        console.log('updated');
        board._id = id
        return board
    } catch (err) {
        logger.error(`cannot update board ${boardId}`, err)
        throw err
    }
}


function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.name) {
        const txtCriteria = { $regex: filterBy.name, $options: 'i' }
        criteria.name = txtCriteria
    }
    if (filterBy.inStock) {
        criteria.inStock = JSON.parse(filterBy.inStock)
    } if (filterBy.labels) {
        criteria.labels = { $in: filterBy.labels }
    }
    return criteria
}

function _buildSortCriteria({ sortBy }) {
    const criteria = {}
    criteria[sortBy] = 1
    return criteria

}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
}