const router = require("express").Router();
const controller = require("../controllers/productController");

router.post("/", controller.createProduct);
router.put("/meta-data", controller.updateMetadata);

module.exports = router;
