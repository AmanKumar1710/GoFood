const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://aman1710:Amankumar1710@cluster0.xedebaj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");

    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

    const foodItemsData = await foodItemsCollection.find({}).toArray();
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    global.food_items = foodItemsData;
    global.foodCategory = foodCategoryData;

    console.log("✅ Data loaded into globals");

  } catch (err) {
    console.error("❌ MongoDB connection or data load failed:", err);
    process.exit(1);
  }
};

module.exports = mongoDB;
