const express = require('express');
const {getAllCourse,  getCourseById, createCourse, updateCourse, deleteCourse } 
= require ('../controllers/courseControllers');
const authenticateToken = require('../middleware/authMiddlewares');

const router = express.Router();

router.get ('/', authenticateToken, getAllCourse);
router.get ('/:id', authenticateToken, getCourseById);
router.post('/', authenticateToken, createCourse);
router.put('/:id', authenticateToken, updateCourse);
router.delete('/:id', authenticateToken, deleteCourse);

module.exports = router;