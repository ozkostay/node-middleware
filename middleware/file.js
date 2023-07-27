const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb){
    cb(null, 'public/books');
  },
  filename(req, file, cb){
    cb(null, 'book-name.pdf');
  }
})

module.exports  = multer({storage});
