const express = require('express');
const router = express.Router();

router.use('/test', require('./test'));
router.use('/admin', require('./admin'));

module.exports = router;
