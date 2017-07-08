'use strict';
let express = require('express');
let router = new express.Router();
let styles = require('./controller');

//endpoints that controllers
router.put('/update/:id', styles.updateGuide);
router.get('/get', styles.getGuides);
router.get('/get/:id', styles.getGuideById);
router.post('/create', styles.createGuide);
router.delete('/delete/:id', styles.deleteGuide);

module.exports = router;