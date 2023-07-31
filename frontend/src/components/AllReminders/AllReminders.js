import { useState, useEffect } from 'react';

import { SingleDate } from "../../components/SingleDate/SingleDate"
import { NewReminder } from "../../components/NewReminder/NewReminder"

import { FiSearch } from 'react-icons/fi';

import './AllReminders.css';

export function AllReminders({reminders, setReminders}) {

  const [newReminderOpen, setNewReminderOpen] = useState(false); /* open and close the sidebar */

  useEffect(() => {

  }, [reminders])
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
        <div className="newReminderButton">
          <button  onClick= {() => setNewReminderOpen(true)}>
            add reminder
          </button>
        </div>
      </div>    
      
      <div className="listAllReminders">
        {reminders.map(data => (
          <div key={data.date}>
            <SingleDate reminders={data.reminders} setReminders={setReminders} date={data.date}/> 
          </div>
        ))}
       
      </div>
      <NewReminder reminders={reminders} setReminders={setReminders} isOpen={newReminderOpen} setNewReminderClose={() => setNewReminderOpen(false)}/>
    </div>
  )
}