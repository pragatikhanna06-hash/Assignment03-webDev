const express = require("express");

const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    adjustStock,
    getLowStockProducts,
    getCategorySummary
} = require("../controllers/productController");


// CREATE PRODUCT
router.post("/", createProduct);


// GET ALL PRODUCTS
router.get("/", getAllProducts);


// GET LOW STOCK PRODUCTS
router.get("/reports/low-stock", getLowStockProducts);


// GET CATEGORY-WISE SUMMARY
router.get("/reports/category-summary", getCategorySummary);


// GET SINGLE PRODUCT
router.get("/:id", getProductById);


// UPDATE PRODUCT
router.put("/:id", updateProduct);


// ADJUST STOCK
router.patch("/:id/stock", adjustStock);


// DELETE PRODUCT
router.delete("/:id", deleteProduct);


module.exports = router;