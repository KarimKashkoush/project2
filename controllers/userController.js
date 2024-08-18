
const User = require('../models/User')
const moment = require('moment');


// الصفحة الرئيسية
const login = (req, res) => {
    res.render("login")
}

// الصفحة الرئيسية
const signup = (req, res) => {
    res.render("signup")
}

// الصفحة الرئيسية
const home = (req, res) => {
    User.find()
        .then((data) => { res.render('home', { result: data, title: "Home" }); })
        .catch((err) => { console.log(err); })
}

// عرض صفحة الدكتور
const search = (req, res) => {
    User.find({ nationalityId: req.body.searchValue }).then((data) => { res.render('doctor', { result: data, title: "البطاقة الصحية - الطبيب", moment: moment }); })
        .catch((err) => { console.log(err); })
}

// لوحة التحكم
const dashboard = (req, res) => {
    User.find()
        .then((data) => { res.render('dashboard', { result: data, title: "لوحة التحكم", moment }); })
        .catch((err) => { console.log(err); })
}

// صفحة إضافة مستخدم
const add = (req, res) => {
    res.render('add')
}

const addMongo = (req, res) => {
    User.findOne({ nationalityId: req.body.nationalityId })
        .then(existingUser => {
            if (existingUser) {
                res.send(`
                    <script>
                        confirm('الرقم القومي موجود بالفعل. الرجاء تعديل الرقم.');
                        window.history.back(); // العودة إلى الصفحة السابقة
                    </script>
                `);
            } else {
                const Data = new User(req.body);
                return Data.save().then(() => {
                    res.redirect('/add');
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('حدث خطأ ما.');
        });
};



// عرض بيانات الشخص الواحد فقط
const view = (req, res) => {
    User.findById(req.params.id)
        .then((result) => { res.render('view', { object: result }); })
        .catch((err) => { console.log(err) })
}

// حذف شخص من قاعدة البيانات
const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => { res.redirect('/dashboard'); })
        .catch((err) => { console.log(err); });
}

module.exports = { home, addMongo, add, view, deleteUser, dashboard, search, login, signup }