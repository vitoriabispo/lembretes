import { useState } from 'react';

import { SingleDate } from "../../components/SingleDate/SingleDate"
import { NewReminder } from "../../components/NewReminder/NewReminder"

import { FiSearch } from 'react-icons/fi';

import './AllReminders.css';

export function AllReminders() {

  const [newReminderOpen, setNewReminderOpen] = useState(false);
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
        <button id="newReminderButton" onClick= {() => setNewReminderOpen(true)}>
          add reminder
        </button>
      </div>
      
      <div className="listAllReminders">
        <SingleDate/> 
        <SingleDate/>
        <SingleDate/>
      </div>

      <NewReminder isOpen={newReminderOpen} setNewReminderClose={() => setNewReminderOpen(!newReminderOpen)}/>


    </div>
  )
}