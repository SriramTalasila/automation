const express = require('express');
const router = express.Router();
const geoFenceController = require('../controllers/geofence');

router.post('/update', geoFenceController.status_change);

router.get('/get_status',geoFenceController.get_status)

module.exports = router;