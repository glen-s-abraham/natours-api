const express = require('express')
const router = express.Router()
const {
    getAllTours,getSingleTour,createTours,editTours,delTours
} = require('../controllers/TourController')

const {postTourValidation}=require('../middlewares/TourValidations')

const {checkID} = require('../controllers/TourController')
router.param('id',checkID)

router.route('/')
    .get(getAllTours)
    .post(postTourValidation,createTours)
router.route('/:id')
    .get(getSingleTour)
    .patch(editTours)
    .delete(delTours)

module.exports = router;