const connection = require('./connection')

const getAll = async () => {
  const query = 'SELECT * FROM reminders';
  const [reminders] = await connection.execute(query);
  return reminders;
};

const createReminder = async (reminder) => {
  const { text, date, color } = reminder;
  const query = 'INSERT INTO reminders(text, date, color) VALUES (?, ?, ?)';
  const [created] = await connection.execute(query, [text, date, color]);

  return {insertId: created.insertId};
};

const deleteReminder = async (id) => {
  const query = 'DELETE FROM reminders WHERE id = ?';
  const [deleted] = await connection.execute(query, [id]);

  return deleted;
};

const filterReminder = async (date) => {
  const query = 'SELECT * FROM reminders WHERE date = ?';
  const [filtered] = await connection.execute(query, [date]);

  return filtered;
};

module.exports = {
  getAll,
  createReminder,
  deleteReminder,
  filterReminder,
};