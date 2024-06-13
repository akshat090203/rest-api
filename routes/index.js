const express =require("express");
const {categoryController} =require('../controllers/categoryController');
const router = express.Router();
const multer = require ("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/.upload/category/thumbnail')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  

const upload = multer({ storage: storage});

router.post("/product",productController.store);
router.get("/product",productController.index);
// router.delete("/product",productController.delete);
module.exports=router;