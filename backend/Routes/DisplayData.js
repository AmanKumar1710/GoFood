const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    console.log("food_items:", global.food_items?.length);
    console.log("foodCategory:", global.foodCategory?.length);
    
    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
