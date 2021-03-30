const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const fileController = require('./controllers/fileController')
const multer = require('multer')

const upload = multer({dest: 'uploads/'})



router.get('/',homeController.home)


router.post('/api/fileanalyse',upload.single('upfile'),fileController.uploadFile)











module.exports = router