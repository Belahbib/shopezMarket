const {Router} = require('express');
const multer = require('multer');
const authenticateToken = require('../middlewares/auth')
const upload = require('../middlewares/multer');
const router = Router();
const {AddProduct, FetchingProducts, ProductDetails, DeleteProduct, Mylistings, deleteImages, updateProduct, AddCart,Cart} = require('../controllers/productController');


router.post('/List', authenticateToken, upload.array('product_Images', 8), AddProduct);
router.get('/products',authenticateToken, FetchingProducts);
router.get('/product/:productId',authenticateToken, ProductDetails);
router.delete('/delete/:productId',authenticateToken, DeleteProduct);
router.get('/mylistings/:userId',authenticateToken, Mylistings);
router.delete('/product/:productId/image/:imageName',authenticateToken , deleteImages)
router.put('/updateProduct/:productId',authenticateToken, upload.array('product_Images', 8),updateProduct)
router.post('/product/:productId/cart',authenticateToken,  AddCart)
router.get('/mycart/:userId',authenticateToken, Cart);




module.exports = router;