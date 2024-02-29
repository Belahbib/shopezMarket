const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/multer');
const {registerUser, loginUser, logoutUser,CurrentUser,TokenInfo, UpdateUser,verify} = require('../controllers/userController'); 


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/logout", logoutUser);
router.get('/userbytoken',  TokenInfo);
router.get('/user/:id', CurrentUser );
router.put('/user/update/:id',upload.single('avatar') , UpdateUser); 
router.get('/users/:userId/verify/:token',verify )
    
  
   
module.exports = router;