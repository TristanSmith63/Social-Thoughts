const router = require('express').Router()
const { 
	getAllUsers,
	getUserById,
	addUser, 
	addFriend,
	updateUser,
	deleteUser,
	removeFriend
} = require('../../controllers/userController')

router.route('/')
	.get(getAllUsers)
	.post(addUser)

router.route('/:id')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser)

router.route('/:userId/friends/:friendId')
	.post(addFriend)
	.delete(removeFriend)

module.exports = router