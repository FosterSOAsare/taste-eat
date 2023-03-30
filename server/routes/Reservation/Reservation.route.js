const express = require("express");
const { receiveNewReservation } = require("./Reservation.controller");

const reservationRouter = express.Router();
reservationRouter.post("/reservations", receiveNewReservation);

module.exports = reservationRouter;
