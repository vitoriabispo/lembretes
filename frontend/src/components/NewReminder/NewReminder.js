import { IoIosClose } from 'react-icons/io';

import './NewReminder.css';

export function NewReminder() {
  return(
    <div className="newReminder">
      <p><IoIosClose /></p>
      <div className="descriptionNewReminder">
        <p>new reminder</p>
        <p>add a new reminder to the list</p>
      </div>

      <form className="formNewReminder">
        <input type="text" id="text" placeholder="description"/>
        <input type="date" id="date"/>
        <input type="select" id="color" placeholder="color"/>
        <button type="submit" id="create">create</button>
      </form>
    </div>
  )
}