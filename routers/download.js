const express = require('express');
const router = express.Router();
const fileMulter = require('../middleware/file');

router.get("/api/books/:id/download", (req, res) => {
  const { books } = store;
  const { title, desc } = req.body;
  const { id } = req.params;

  // const {fieldname} = req.file;
  // console.log('fieldname', fieldname);
  //   res.json({fieldname});
  //   res.json();
  });

module.exports = router;
