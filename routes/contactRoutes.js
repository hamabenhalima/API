const express = require("express")
const router = express.Router()
const {getContact,addContact,updateContact,deleteContact} = require('../controllers/contactControllers')


router.get("/",getContact)
router.post("/post",addContact)
router.put("/post",updateContact)
router.delete("/post/ :id",deleteContact)

module.exports = router