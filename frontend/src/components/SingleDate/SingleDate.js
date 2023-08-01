import {  useEffect, useState } from 'react';

import { FiTrash } from 'react-icons/fi';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

import './SingleDate.css';
import api from '../../service/api'
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"
import transformDate from "../../utils/transformDate"


export function SingleDate({reminders, setReminders, date}) {
  const [ selected, setSelected ] = useState(null);

  function formatDate (date) {
    var data = new Date(date);

    var day = data.getDate();
    day = day < 10 ? '0' + day : day; 

    var month = data.getMonth()+1;
    month = month < 10 ? '0' + month : month; 
    
    var year = data.getFullYear();
    var newDate = new Date();
    newDate = day+"/"+month+"/"+year;
    return newDate;
  }

  async function onDelete(e, id) {
    e.preventDefault();
    try {
      await api.delete(`/${id}`);
      const res = await api.get('/');
      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformDate(groupedArray)));

    } catch {
      alert("Unable to delete the reminder");
    }
  }

  function toggle(i) {
    setSelected(current => current === reminders? null : reminders)
  }

  useEffect(() => {
    setSelected(current => current === reminders? null : reminders)
  }, [reminders])
  
  return(
    <div className="singleDate">
      <div className="accordionSingleDate">
        <div className="dateReminder">
          <p>{formatDate(date)}</p>
          <button onClick={() => toggle(reminders)}>
            {selected === reminders ? <BsFillCaretUpFill size={22}/> : <BsFillCaretDownFill size={22}/>}
          </button>
        </div>
        <div className={selected === reminders ? "reminderContainer" : "reminderContainerClosed"}>
          {reminders.map(reminder => (
            <div key={reminder.id} className={selected === reminders ? "singleReminderShow" : "singleReminder"} style={{ backgroundColor: reminder.color }}>
              <p>{reminder.text}</p>
              <div className="singleReminderBtns">
                <button onClick={(e) => {onDelete(e, reminder.id)}} ><FiTrash size={22} style={{ backgroundColor: reminder.color }} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}