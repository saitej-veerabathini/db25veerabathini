var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

/* GET icecream */ 
router.get('/', icecream_controlers.icecream_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('icecream', { title: 'Search Results icecream' });
});

module.exports = router;

/* GET detail icecream page */ 
router.get('/detail', icecream_controlers.icecream_view_one_Page); 

/* GET create icecream page */ 
router.get('/create', icecream_controlers.icecream_create_Page); 

// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET create update page */ 
router.get('/update', secured, icecream_controlers.icecream_update_Page); 


/* GET create icecream page */ 
router.get('/delete', icecream_controlers.icecream_delete_Page); 