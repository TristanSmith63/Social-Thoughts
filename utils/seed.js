const connection = require('../config/connection')
const { User, Thought} = require('../models/index')
const { assignUserTothought, usernamesWithEmail } = require('../utils/data')
const colors = require('colors');


connection.once('error', (error) => console.log(`${error}`.red))

connection.once('open', async () => {
	console.log('connected'.bgBlue)

	
	await connection.db.dropDatabase()
	console.log('database dropped'.red)

	await seedFunction()
	console.log(`seeding complete`.bgBlack.white)
	process.exit(0)
})

// making Users Array with emails
const userEmailSeed = async () =>{
	try {
		const users = usernamesWithEmail()
		const createdUsers = await User.insertMany(users)
		console.log(`userEmailSeed`.bgMagenta)
		return createdUsers
	} catch (error) {
		console.log(error.red)
	}
}
	
// assinging usernames 
const userThoughtSeed = async () => {
	try {
		const userThoughtArray = assignUserTothought()
		const seededThoughtArray = await Thought.insertMany(userThoughtArray)
		console.log(`userThoughtSeeded`.bgCyan)
		return seededThoughtArray
	} catch (error) {
		console.log(error.red)
	}
}



async function seedFunction(){
	
	await userEmailSeed()
	const seededThoughtArray = await userThoughtSeed()
	

}