const validateBody = (req, res, next) => {
  const { body } = req;
  if(body.text == undefined ||  body.name == '' || body.date == undefined || body.date == '' || body.color == undefined || body.color == ''){
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next(); // run if it's ok
}

module.exports = {
  validateBody,
};