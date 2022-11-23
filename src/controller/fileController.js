const { successCode, failCode, errorCode } = require("../config/response");

// dinh nghia model

/* get food controller */
const getImage = async (req, res) => {
  try {
    const fileData = await req.file;
    // luu vao db chi can filename
    // res.send(fileData.filename);
  } catch (error) {
    // res.send(error);
  }
};

// khon phai get hay post, ma chi xu ly ma hoa hinhanh

const handleFileBase = (req, res) => {
  const fs = require("fs");
  const fileData = req.file;
  const base64PreFix = `data:${fileData.mimetype};base64`;
  let filePath = process.cwd() + `/public/img/${fileData.filename}`;

  // valiate file size
  if (req.file.size >= 4 * 1024 * 1024) {
    fs.unlinkSync(filePath);
    errorCode(res, "chỉ được phép upload 4MB");
    return;
  }

  //  validate fime mime type
  if (fileData.mimetype !== "image/jpg" && fileData.mimetype !== "image/jpeg") {
    fs.unlinkSync(filePath);
    errorCode(res, "sai dinh dang");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    let fileBase = `${Buffer.from(data).toString("base64")}`;
    console.log(fileBase);
    //   xoa file sau khi doc xong
    setTimeout(() => {
      fs.unlinkSync(filePath);
    }, 3000);
    res.send(`${base64PreFix},${fileBase}`);
  });
};

module.exports = {
  getImage,
  handleFileBase,
};
