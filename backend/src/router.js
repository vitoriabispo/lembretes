const express = require('express');
const router = express.Router();

const remindersController = require('./controllers/remindersController');
const reminderMiddleware = require('./middlewares/remindersMiddleware')

router.get('/', remindersController.getAll);
router.post('/', reminderMiddleware.validateBody, remindersController.createReminder);
router.delete('/:id', remindersController.deleteReminder);
router.put('/:id', reminderMiddleware.validateBody, remindersController.updateReminder);
router.get('/:date', remindersController.filterReminder)

module.exports = router;