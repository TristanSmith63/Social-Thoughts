const { model, Schema} = require('mongoose')
const validator = require('validator')
const Thought = require('../models/Thought')

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true
		},

		email:{
			type: String,
			lowercase: true,
			required: true,
			unique: true,
			validate:{
				validator: validator.isEmail,
				message: props=> `${props.value} is not a valid email`
			}
		},

		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'thought'
			}
		],
		
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'user'
			}
		]
	},
	{
		toJSON: {
			virtuals: true
		},
		id: false,
	
		virtuals: {
			friendsCount:{
				get(){
					return this.friends.length
				}
			}
		}
	}
)
userSchema.pre('deleteOne', { document: true, query: false }, async function(){
	try {
		const thoughts = await Thought.findByUserName(this.username)
		await Thought.deleteMany({ _id: {$in: thoughts.map(thought => thought._id) } } )

	} catch (error) {
		console.log(`Error in deleting thoughts from user- ${error}`.red)
	}
})

const User = model('user', userSchema)

module.exports = User