const mongoose = require("mongoose");

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log(`Connected to Database`);
  } catch (error) {
    console.error(error);
    console.log(`Database Connection Error`);
  }
};
