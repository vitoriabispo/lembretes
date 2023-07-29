const remindersModel = require('../models/remindersModel')

const getAll = async (_req, res) => {
  const reminders = await remindersModel.getAll();

  return res.status(200).json(reminders);
};

const createReminder = async (req, res) => {
  const created = await remindersModel.createReminder(req.body);

  return res.status(201).json(created);
};

const deleteReminder = async (req, res) => {
  const { id } =  req.params;

  await remindersModel.deleteReminder(id);

  return res.status(204).json();
}

const updateReminder = async (req, res) => {
  const { id } = req.params;

  await remindersModel.updateReminder(id, req.body);

  return res.status(204).json();
}

const filterReminder = async (req, res) => {
  const { date } =  req.params;

  const reminders = await remindersModel.filterReminder(date);

  return res.status(200).json(reminders);
}

module.exports = {
  getAll,
  createReminder,
  deleteReminder,
  updateReminder,
  filterReminder,
}