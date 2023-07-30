import { IoIosClose } from 'react-icons/io';

import './NewReminder.css';

export function NewReminder() {

  function disableDates() {
    var date = new Date();
    var day = date.getDate()+1; // só pode para dias maiores que o atual
    day = day < 10 ? '0' + day : day; 
    var month = date.getMonth()+1;
    month = month < 10 ? '0' + month : month; 
    var year = date.getFullYear();

    var minDate = year+"-"+month+"-"+day;
    return minDate;
  }
  
  return(
    <div className="newReminder">
      <p id="closeButton"><IoIosClose /></p>
      <div className="descriptionNewReminder">
        <h3>new reminder</h3>
        <p>add a new reminder to the list</p>
      </div>

      <form className="formNewReminder">
        <input type="text" id="text" placeholder="description"/>
        <div className="containerDateColor">
        <input type="date" id="date" min={disableDates()}/>
        <select id="color" placeholder="color">
          <option value="red" style={{ backgroundColor: '#F77575' }}>red</option>
          <option value="purple" style={{ backgroundColor: '#A890ED' }}>purple</option>
          <option value="green" style={{ backgroundColor: '#B3EC7A' }}>green</option>
          <option value="yellow" style={{ backgroundColor: '#F8DE94' }}>yellow</option>
        </select>
        </div>
        <button type="submit" id="create">create</button>
      </form>
    </div>
  )
}