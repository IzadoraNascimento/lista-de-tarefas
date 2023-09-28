import { useState } from "react"
import Appointment from "./Appointment"

export default function Day(props){
  const [appointments, setAppointments] = useState([])

  const addAppointment = () => {
    const name = prompt("Informe o nome da Tarefa:")
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false
    }
    setAppointments((currentState) =>[... currentState,newAppointment])
  }

  const toggleDone = (appointmentId) => {
    setAppointments((currentState) => (
      currentState.map(appointment => {
        if (appointment.id !== appointmentId)
          return appointment
        else
          return {...appointment, done: !appointment.done}
      })
    ))
  }

  const removeAppointment = (appointmentId) => {
    setAppointments(currentState => (
      currentState.filter(appointment => appointment.id !== appointmentId)
    ))
  }
  return (
    <div className="">
      <div className="">
        <h2 className="">
          <span className="">
            {props.day}
          </span>          
        </h2>
        <ul className="">
          {appointments.map(appointment => (
            <Appointment 
              key={appointment.id}
              appointment={appointment}
              toggleDone={toggleDone}
              removeAppointment={removeAppointment}
            />
          ))}
        </ul>
        <div className="">
          <button className=""
            onClick={addAppointment}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}