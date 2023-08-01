import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import './NewReminder.css';

import  api  from '../../service/api'
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"
import transformDate from "../../utils/transformDate"


export function NewReminder({ editByID, isOpen, setNewReminderClose, reminders, setReminders }) {

  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [color, setColor] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const daysInMonth = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
  
  async function onSubmit(e) {
    e.preventDefault();
    if(text === '' || date === '' || color === '')
      return alert('All fields need to be filled!'); 
    try {
      await api.post('', {text, date, color});
      const res = await api.get('/');
      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformDate(groupedArray)));
      setEmpty();
    } catch (err) {
      alert('Unable to create the reminder')
    }
  }

  function setEmpty() {
    setText('');
    setDate('');
    setColor('');
    setSelectedColor('');
  }

  function disableDates() {
    var date = new Date();
    var day = date.getDate()+1; // só pode para dias maiores que o atual
    day = day < 10 ? '0' + day : day; 

    var month = date.getMonth()+1;
    if( day > daysInMonth[month]) {
      day = '01';
      month+=1;
    }
    month = month < 10 ? '0' + month : month;
     
    var year = date.getFullYear();
    
    var minDate = year+"-"+month+"-"+day;
    return minDate;
  }

  function handleColor (e) {
    setColor(e.target.value);
    setSelectedColor(e.target.value);
  }
  if(isOpen) {
    return(
      <div className="newReminderBG">
        <div className="newReminderForm">

          <div className="closeButton">
            <button onClick={setNewReminderClose}>
              <IoIosClose size={30}/>
            </button>
          </div>
          <div className="formTextContainer">
            <div className="descriptionNewReminder">
              <h3>new reminder</h3>
              <p>add a new reminder to the list</p>
            </div>

            <form className="formNewReminder">
              <input 
                type="text" 
                id="text" 
                placeholder="description" 
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <div className="containerDateColor">
                <input 
                  type="date" 
                  id="date" 
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  min={disableDates()}
                />
                <select 
                  id="color"
                  value={color}
                  onChange={handleColor}
                  style={{ backgroundColor: selectedColor }}
                >
                  <option value="" disabled style={{ backgroundColor: '#E5EAE9' }}>color</option>
                  <option value="#F77575" style={{ backgroundColor: '#F77575' }}> </option>
                  <option value="#A890ED" style={{ backgroundColor: '#A890ED' }}> </option>
                  <option value="#B3EC7A" style={{ backgroundColor: '#B3EC7A' }}> </option>
                  <option value="#F8DE94" style={{ backgroundColor: '#F8DE94' }}> </option>
                </select>
              </div>
              <button 
                type="submit" 
                id="create" 
                onClick={(e) => onSubmit(e)}
              >
                 create
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  } 
  return null;
}