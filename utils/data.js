const usernamesArray = [
	'Ava Young',
  'Liam Smith',
  'Olivia Johnson',
  'Noah Williams',
  'Emma Brown',
  'Sophia Davis',
  'Mason Martinez',
  'Isabella Garcia',
  'Ethan Wilson',
  'Mia Anderson',
  'Lucas Thomas',
  'Charlotte Taylor',
  'Henry Moore',
  'Amelia White',
  'Sebastian Harris',
  'Harper Clark',
  'Aiden Lewis',
  'Evelyn Robinson',
  'Logan Walker',
  'Aria Hall'
]

const emailsArray =[
'charlotte.taylor@example.com',
  'olivia.johnson@example.com',
  'liam.smith@example.com',
  'noah.williams@example.com',
  'ava.young@example.com',
  'sophia.davis@example.com',
  'emma.brown@example.com',
  'mason.martinez@example.com',
  'isabella.garcia@example.com',
  'ethan.wilson@example.com',
  'mia.anderson@example.com',
  'henry.moore@example.com',
  'amelia.white@example.com',
  'sebastian.harris@example.com',
  'harper.clark@example.com',
  'aiden.lewis@example.com',
  'evelyn.robinson@example.com',
  'logan.walker@example.com',
  'aria.hall@example.com',
  'lucas.thomas@example.com'
]

const thoughtsArray = [
"Life is what happens when you're busy making other plans.",
  "The best way to predict the future is to invent it.",
  "You only live once, but if you do it right, once is enough.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "The only impossible journey is the one you never begin.",
  "Life is really simple, but we insist on making it complicated.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
  "The purpose of our lives is to be happy.",
  "Life is short, and it's up to you to make it sweet.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Act as if what you do makes a difference. It does.",
  "You get in life what you have the courage to ask for.",
  "If you want to live a happy life, tie it to a goal, not to people or things."
];

const reactionsArray = [
	
        '😀', '😂', '😍', '🤔', '😎', '😢', '🙌', '👏', '🙏', '🤷', 
        '👍', '👎', '💪', '🎉', '🔥', '💡', '🚀', '🌟', '🎈', '🍀',
        '🌸', '🍕', '🌞', '🌛', '🐱', '🐶', '🐵', '🐢', '🦄', '🍩'
      ];
      


const getRandom = (array) =>{
	let i = Math.floor(Math.random()*array.length)
	const property = array[i]
	console.log(`${property} ${i} property and i data.js 193`.random)
	return property
}


const usernamesWithEmail = () =>{
	const userEmailObjects = usernamesArray.map((username, index) => ({
		username,
		email: emailsArray[index]
		})	
	)
	
	return userEmailObjects
	
}


const assignUserTothought = () => {
	const thoughtObjects = thoughtsArray.map((thought, index) => ({
		thoughtText: thought,
		username: usernamesArray[index]
		})	
	)

	
	return thoughtObjects
}




module.exports = { usernamesWithEmail, getRandom, assignUserTothought }