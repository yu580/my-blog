var express = require('express');
var router = express.Router();


var responseData;
router.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ""
    };
    next();
});
/**
 * 注册接口
 */
router.post('/login', function (req, res, next) {
    console.log(req.body.username)
    res.json(responseData)
});
router.post('/login1', function (req, res, next) {
    console.log(req.body.username)
    res.json(responseData)
});
router.post('/login2', function (req, res, next) {
    console.log(req.body.username)
    res.json(responseData)
});

module.exports = router;
