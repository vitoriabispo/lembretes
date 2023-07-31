import { useState, useEffect } from 'react';

import { Header } from "../../components/Header/Header"
import { AllReminders } from "../../components/AllReminders/AllReminders"

import './Home.css';
import  api  from "../../service/api"
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"
import transformDate from "../../utils/transformDate"

export function Home() {

  const [ reminders, setReminders ] = useState([]);

  useEffect(() => {
    api.get('/').then(res => {
      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformDate(groupedArray)));
      
    }).catch(err => {
      alert('Não está sendo possível exibir os lembretes');
    });
  }, []);

  return(
    <div className="container">
      <Header />
      <AllReminders reminders={reminders} setReminders={setReminders}/>
    </div>
  )
}