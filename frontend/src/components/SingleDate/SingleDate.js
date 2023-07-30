import { FiEdit2, FiTrash } from 'react-icons/fi';

import './SingleDate.css';

export function SingleDate() {
  return(
    <div className="singleDate">
      <div className="dateReminder">
        <p>30/08/2023</p>
      </div>
      <div className="reminderList">
        <p>BCC201 test <FiEdit2 /> <FiTrash /></p>
        <p>BCC201 test <FiEdit2 /> <FiTrash /></p>
        <p>BCC201 test <FiEdit2 /> <FiTrash /></p>
        <p>BCC201 test <FiEdit2 /> <FiTrash /></p>
      </div>
    </div>
  )
}