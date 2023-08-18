var express = require('express');
var router = express.Router();


router.get('/admin/novedades', function(req, res, next) {
    res.render('admin/novedades', {
        layout:'admin/layout'
    });
  });


  module.exports = router;