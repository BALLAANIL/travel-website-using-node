const express = require('express');
const Destination = require('../models/Destination');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching destinations' });
  }
});

router.post('/book', async (req, res) => {
  const { destinationId } = req.body;
  try {
    const destination = await Destination.findById(destinationId);
    if (!destination || destination.availability < 1) {
      return res.status(404).json({ message: 'Destination not available' });
    }
    destination.availability -= 1;
    await destination.save();
    res.json({ message: 'Booking successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error booking destination' });
  }
});

module.exports = router;
