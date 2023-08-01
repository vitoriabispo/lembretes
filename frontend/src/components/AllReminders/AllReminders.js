import { useState, useEffect } from 'react';

import { SingleDate } from "../../components/SingleDate/SingleDate"
import { NewReminder } from "../../components/NewReminder/NewReminder"

import { FiSearch } from 'react-icons/fi';
import  api  from '../../service/api'
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"
import transformDate from "../../utils/transformDate"

import './AllReminders.css';

export function AllReminders({reminders, setReminders}) {

  const [newReminderOpen, setNewReminderOpen] = useState(false); /* open and close the sidebar */
  const [searchDate, setSearchDate] = useState('');

  async function onSearch(e) {
    e.preventDefault();
    try {
      const res = await api.get(`/${searchDate}`);

      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformDate(groupedArray)));
      setSearchDate('');
    } catch (err) {
      alert('Unable to search the reminder')
    }
  }

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
          <input 
            type="date" 
            id="dateSearch" 
            value={searchDate} 
            onChange={e => setSearchDate(e.target.value)}
          />
          <button type="submit" id="searchButton" onClick={(e) => onSearch(e)}><FiSearch size={20}/></button>
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