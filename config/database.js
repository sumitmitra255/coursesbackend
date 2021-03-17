const mongoose = require('mongoose')

const configureDB = () => {
	mongoose
		.connect(
			// process.env.MONGODB_URI || 'mongodb://localhost:27017/courses-app',
			'mongodb+srv://sumit:admin@cluster0.iphtf.mongodb.net/recipe?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			}
		)
		.then(() => {
			console.log('connected to db')
		})
		.catch((err) => {
			console.log(err)
		})
}

module.exports = configureDB
