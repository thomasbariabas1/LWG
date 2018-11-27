import Handman from './hangman'
let HangmanImage = require('../assets/img/games/hangman.jpg')

export default [
		{ path: "/games/Hangman",
			name: "Hangman",
			description:'Find the Word and Save our little friend! Be the hero you dream!',
			image:require("assets/img/games/hangman.jpg"),
			component: Handman
		},
		{
			path: "/games/ScrambledWords",
			name: "Scrambled Words",
			description:'Find the Word and Save our little friend! Be the hero you dream!',
			image:require("assets/img/games/scramble.jpg"),
			component: Handman
		},
		{
			path: "/games/CompleteTheSentence",
			name: "Complete The Sentence",
			description:'Find the Word and Save our little friend! Be the hero you dream!',
			image:require("assets/img/games/sentence.jpg"),
			component: Handman
		},

]
