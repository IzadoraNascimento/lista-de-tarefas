import { useState } from "react"

export default function App() {
  const [appointments, setAppointments] = useState([])

  const addAppointment = () => {
    const name = prompt("Informe o nome da Tarefa:")
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false
    }
    setAppointments([...appointments,newAppointment])
  }


  return (
    <>
      <h1>Planner Semanal</h1>
      <div className="day">
        <h2>Segunda Feira</h2>
        <ul className="list-disc list-inside">
          {appointments.map(appointment => (
            <li key={appointment.id}>{appointment.name}</li>
          ))}
        </ul>
        <button onClick={addAppointment}>Adicionar</button>
      </div>
    </>

  )
}