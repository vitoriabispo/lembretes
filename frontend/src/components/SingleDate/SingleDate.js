import { FiEdit2, FiTrash } from 'react-icons/fi';

import './SingleDate.css';

export function SingleDate() {
  return(
    <div className="singleDate">
      <div className="dateReminder">
        <p>30/08/2023</p>
      </div>
      <div className="reminderContainer">
      <div className="singleReminder">
          <p>BCC201 test </p>
          <div className="singleReminderBtns">
            <button><FiEdit2 size={22}/></button>
            <button><FiTrash size={22}/></button>
          </div>
        </div>
        <div className="singleReminder">
          <p>BCC201 test </p>
          <div className="singleReminderBtns">
            <button><FiEdit2 size={22}/></button>
            <button><FiTrash size={22}/></button>
          </div>
        </div>
        <div className="singleReminder">
          <p>BCC201 test </p>
          <div className="singleReminderBtns">
            <button><FiEdit2 size={22}/></button>
            <button><FiTrash size={22}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}