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
      <div className="day w-64 h-40 border border-black rounded-md shadow-lg ">
        <h2 className="text-center text-lg font-bold">
          <span className="inline-block border-b border-black mb-2">
            {props.day}
          </span>          
        </h2>
        <ul className="list-disc list-inside">
          {appointments.map(appointment => (
            <Appointment 
              key={appointment.id}
              appointment={appointment}
              toggleDone={toggleDone}
              removeAppointment={removeAppointment}
            />
          ))}
        </ul>
        <div className="flex items-center justify-center p-8">
          <button className="bg-emerald-400 p-2 rounded-lg"
            onClick={addAppointment}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}