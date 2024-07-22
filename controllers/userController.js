const User = require('../models/User')
const colors = require('colors')

module.exports = {

	async getAllUsers(req, res) {
		try {
			const users = await User.find()
			res.json(users)
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async getUserById(req, res) {
		try {
			const user = await User.findOne({
				_id: req.params.id
			})
			res.json(user)
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.json(error)
		}
	},

	async addUser(req, res){
		let { username, email, thoughts, friends } = req.body
		username = username.trim()
		email = email.trim()

		try {
			const usernameTaken = await User.findOne({
				username: username
			})

			if(usernameTaken !== null){
				console.log('username already taken'.red)
				res.status(400).json({message: 'username already taken'})
			}else{
				const newUser = await User.create({
					username,
					email,
					thoughts,
					friends
				})
				
				res.status(201).json(newUser)
			}
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async addFriend (req, res){
		const userId = req.params.userId
		const friendId = req.params.friendId
		try{
			if(!userId || !friendId) {
				console.log('user not found'.red)
				res.status(400).json({message: 'user not found'})
			}else{
				const mainUser = await User.findByIdAndUpdate(
					{ _id: userId },
					{$addToSet: { friends: friendId }},
					{new: true}
			).populate('friends')
				
				res.status(201).json(mainUser)
			}
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async updateUser(req, res){
		const userId = req.params.id
		let { username, email} = req.body
		username = username.trim()
		email = email.trim()

		const userData = {
			username,
			email
		}

		try{
			const user = await User.findByIdAndUpdate(
				{ _id: userId},
				{ $set: userData },
				{ runValidators: true, new: true}
			)

			if(!user){
				console.log('No user found')
				res.status(404).json({message: 'User not found'})
			}
				
				res.status(201).json(user)
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async deleteUser(req, res){
		const userId = req.params.id

		try {
			const foundUser = await User.findById({ _id: userId })
			if(!foundUser){
				console.log('User not found')
				return res.status(404).json({message:'User not found'})
			}

			await foundUser.deleteOne()

			console.log('user deleted successfully')
			res.status(204)
			
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async removeFriend(req, res){
		const userId = req.params.userId
		const friendId = req.params.friendId

		console.log(`UserId: ${userId}`.blue)
		console.log(`friendId: ${friendId}`.green)

		if(!userId || !friendId){
			res.status(404).json({message: `User not found`})
		}
			try{
				const user = await User.findByIdAndUpdate(
					{ _id: userId },
					{ $pull: {friends: friendId }},
					{ runValidator: true, new: true }
				)
					if(!user){
						res.status(404).json({message: `user couldn't be found`})
					}
					res.status(200).json({ message: 'friend removed', user: user })
				
			}catch(error){
				console.log(`Error!- ${error}`.red)
				res.status(404).json({ message: `friend coulnd't be removed`, error: error})
			}
		}

}