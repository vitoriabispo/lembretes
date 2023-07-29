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

const updateReminder = async (id, reminder) => {
  const query = 'UPDATE reminders SET text = ?, date = ?, color = ? WHERE id = ?'
  const { text, date, color } = reminder;
  
  const [updated] = await connection.execute(query, [text, date, color, id]);

  return updated;
}

module.exports = {
  getAll,
  createReminder,
  deleteReminder,
  updateReminder,
};