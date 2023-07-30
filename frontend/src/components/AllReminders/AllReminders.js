import { SingleDate } from "../../components/SingleDate/SingleDate"

import { FiSearch } from 'react-icons/fi';

import './AllReminders.css';

export function AllReminders() {
  return(
    <div className="allReminders">
      <div className="descriptionAllReminders">
        <p>all reminders</p>
        <p>list of all your reminders </p>
      </div>

      <div className="searchRow">
        <p>search <FiSearch /></p>
        <p>add reminder</p>
      </div>

      <div className="listAllReminders">
        <SingleDate/>
      </div>
    </div>
  )
}