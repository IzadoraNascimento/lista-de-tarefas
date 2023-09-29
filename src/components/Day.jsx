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
      <div className=" rounded border-2 border-stone-400 h-full">
        <h2 className="text-lg font-medium text-center">
          <span className="inline-block border-b border-stone-400 mb-2">
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
        <div className="flex justify-center mt-4">
          <button className="bg-emerald-400 p-1 mb-4 text-sm font-medium rounded-md"
            onClick={addAppointment}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}