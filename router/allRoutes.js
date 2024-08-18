const express = require('express')
const router = express.Router();
const User = require('../models/User')
const userController = require('../controllers/userController')


router.post('/reports/:id/report', async (req, res) => {
    try {
        const patient = await User.findById(req.params.id);
        if (patient) {
            patient.reports.push({
                report: req.body.report,
                rays: req.body.rays,
                analysis: req.body.analysis,
                Prescription: req.body.Prescription
            });
            await patient.save();
        }
        res.redirect('/doctor');
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
    }
});

// الصفحة الرئيسية
router.get('/login', userController.login)

// الصفحة الرئيسية
router.get('/signup', userController.signup)

// الصفحة الرئيسية
router.get('/home', userController.home)

// لوحة التحكم
router.get('/dashboard', userController.dashboard)

// اضافة الي قاعدة البيانات
router.post('/add', userController.addMongo);

// الانتقال الي الصفحات
router.get("/add", userController.add)


router.post("/search", userController.search)

// الانتقال الي بيانات الشخص
router.get("/user/:id", userController.view)

router.delete('/:id', userController.deleteUser)

module.exports = router