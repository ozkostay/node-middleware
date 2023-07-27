const express = require('express');
const router = express.Router();
const Book = require('../store/Book');
const fileMulter = require('../middleware/file');

router.post("/upload-book", fileMulter.single('book-name'),
  (req, res) => {
    if (req.file) {
      const {fieldname} = req.file;
      console.log('fieldname', fieldname);
      res.json({fieldname});
    } 
    res.json();
  });

module.exports = router;
