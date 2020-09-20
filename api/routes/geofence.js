const express = require('express');
const router = express.Router();
const geoFenceController = require('../controllers/geofence');

router.post('/update', geoFenceController.status_change);

module.exports = router;