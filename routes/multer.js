const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploades'); // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueFilename = uuidv4();
        cb(null, uniqueFilename+path.extname(file.originalname) ); 
    }
});

// Initialize multer
const upload = multer({ storage: storage });

module.exports = upload;