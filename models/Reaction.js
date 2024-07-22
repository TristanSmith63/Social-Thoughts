const { Schema, Types, model} = require( 'mongoose')

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
		},
		reactionBody: {
			type: String,
			required: true,
			default: ':)',
			max: [ 280, 'Reactions must be under 280 characters']
		},

		username: {
			type: String,
			required: true
		},

		createdAt: {
			type: Date,
			default: Date.now
			
		}
		
	},
	{
		toJSON: {
			getters: true,
		},
		id: false
	},

)
reactionSchema.path('createdAt').get(function(value){
	return value.toLocaleString()
})


module.exports = reactionSchema