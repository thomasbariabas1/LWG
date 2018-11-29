import Handman from './hangman'
import Scramble from './Scramble'
import FillTheSentence from './FillTheSentence'
import MemoryGame from './MemoryGame'

export default [
		{ path: "/games/Hangman",
			exact:true,
			name: "Hangman",
			description:'Find the Word and Save our little friend! Be the hero you dream!',
			image:require("assets/img/games/hangman.jpg"),
			component: Handman
		},
		{
			path: "/games/ScrambledWords",
			name: "Scrambled Words",
			exact:true,
			description:'Scramble Scramble! Can you unscramble?',
			image:require("assets/img/games/scramble.jpg"),
			component: Scramble
		},
		// {
		// 	path: "/games/CompleteTheSentence",
		// 	name: "Complete The Sentence",
		// 	exact:true,
		// 	description:'Something is missing. Guess what is missing!',
		// 	image:require("assets/img/games/sentence.jpg"),
		// 	component: FillTheSentence
		// },
	{
		path: "/games/MemoryGame",
		name: "Memory Game",
		exact:true,
		description:'They are pair, with hair. Can you find the twin of each pair?',
		image:require("assets/img/games/memoryGame.jpg"),
		component: MemoryGame
	},
]
