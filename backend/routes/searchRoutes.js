const router = require("express").Router();
const controller = require("../controllers/searchController");

router.get("/product", controller.searchProducts);

module.exports = router;
