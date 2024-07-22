const router = require('express').Router()
const { 
	getAllThoughts,
	getthoughtById,
	addThought,
	addReaction,
	updateThought,
	deleteThought,
	removeReaction,
	
} = require('../../controllers/thoughtController')

router.route('/')
	.get(getAllThoughts)
	.post(addThought)

router.route('/:id')
	.get(getthoughtById)
	.put(updateThought)
	.delete(deleteThought)
	
router.route('/:thoughtId/reactions')
	.post(addReaction)
	.delete(removeReaction)



module.exports = router