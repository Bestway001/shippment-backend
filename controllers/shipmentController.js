const Shipment = require("../model/Shipment");

// Create a new shipment
exports.createShipment = async (req, res) => {
  const { trackingNumber, origin, destination } = req.body;
  try {
    const shipment = new Shipment({
      trackingNumber,
      origin,
      destination,
      userId: req.user.id,
    });
    await shipment.save();
    res.status(201).json(shipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all shipments for a user
exports.getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({ userId: req.user.id });
    res.json(shipments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
