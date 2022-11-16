const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    content: data,
  });
};

const failCode = (res, data, message = "Lỗi frontend/ backend") => {
  res.status(400).json({
    message,
    content: data,
  });
};

const errorCode = (res, message = "Lỗi backend") => {
  res.status(500).json(message);
};

module.exports = { successCode, failCode, errorCode };
