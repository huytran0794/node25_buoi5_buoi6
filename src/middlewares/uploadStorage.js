const multer = require("multer");

const uploadPath = process.cwd() + "/public/img";
const uploadStorage = multer.diskStorage({
  /**
   * A string or function that determines the destination path for uploaded
   * files. If a string is passed and the directory does not exist, Multer
   * attempts to create it recursively. If neither a string or a function
   * is passed, the destination defaults to `os.tmpdir()`.
   *
   * @param req The Express `Request` object.
   * @param file Object containing information about the processed file.
   * @param callback Callback to determine the destination path.
   */
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  /**
   * A function that determines the name of the uploaded file. If nothing
   * is passed, Multer will generate a 32 character pseudorandom hex string
   * with no extension.
   *
   * @param req The Express `Request` object.
   * @param file Object containing information about the processed file.
   * @param callback Callback to determine the name of the uploaded file.
   */
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_${file.originalname}`;
    cb(null, fileName);
  },
});

// khai bao dia chi (duong dan ma minh muon)
// vi du thi lam trong nay luon, khong co tach ra controller
/**
 * A `StorageEngine` responsible for processing files uploaded via Multer.
 * Takes precedence over `dest`.
 */
const upload = multer({ storage: uploadStorage });

module.exports = upload;
