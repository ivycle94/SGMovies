const mongoose = require('mongoose')

const sgMoviesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('SGMovies', sgMoviesSchema)
