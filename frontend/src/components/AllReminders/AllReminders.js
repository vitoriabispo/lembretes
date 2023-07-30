import { SingleDate } from "../../components/SingleDate/SingleDate"

import { FiSearch } from 'react-icons/fi';

import './AllReminders.css';

export function AllReminders() {
  return(
    <div className="allReminders">
      <div className="descriptionAllReminders">
        <h3>all reminders</h3>
        <p>list of all your reminders </p>
      </div>

      <div className="searchRow">
        <form className="searchForm">
          <input type="text" id="dateSearch" placeholder="search"/>
          <button type="submit" id="searchButton" ><FiSearch/></button>
        </form>
        <button id="newReminderButton">add reminder</button>
      </div>

      <div className="listAllReminders">
        <SingleDate/>
      </div>
    </div>
  )
}