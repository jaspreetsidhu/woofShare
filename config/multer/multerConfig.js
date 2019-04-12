//allows you to upload dog image for create dog functionality

var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `dog-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

const multerUploads = multer({ storage }).single("photoUrl");

module.exports = multerUploads;
