const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    };
    await mongoose.connect(
      "mongodb://localhost/to-do-app", connectionParams
    );
    console.log("Connected to database")
  } catch (error) {
    console.log("Error", error)
  }
}