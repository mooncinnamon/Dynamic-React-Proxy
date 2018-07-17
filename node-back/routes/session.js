var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    process.argv.forEach(function (val, index, array) {
        res.send(index, val);
    });
});

module.exports = router;