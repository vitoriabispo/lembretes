import { Header } from "../../components/Header/Header"
import { AllReminders } from "../../components/AllReminders/AllReminders"
import { NewReminder } from "../../components/NewReminder/NewReminder"

import './Home.css';

export function Home() {
  return(
    <div className="container">
      <Header />
      <NewReminder />
      <AllReminders />
    </div>
  )
}