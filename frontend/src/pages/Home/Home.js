import { Header } from "../../components/Header/Header"
import { AllReminders } from "../../components/AllReminders/AllReminders"

import './Home.css';

export function Home() {
  return(
    <div className="container">
      <Header />
      <AllReminders />
    </div>
  )
}