export default function Appointment(props) {
  return (
    <div className="pl-2 flex items-center justify-between">
      <div>
        <li className={props.appointment.done ? 'line-through' : ''}>
          <div>
            <input 
              type="checkbox" 
              id={`appointment-${props.appointment.id}`}
              onChange={() => props.toggleDone(props.appointment.id)}
              checked={props.appointment.done}
            />
            <label 
              htmlFor={`appointment-${props.appointment.id}`}
              className="pl-1 text-sm italic font-light md:text-base md:font-normal"
            >
              {props.appointment.name}
            </label>
          </div>
        </li>
      </div>
      <div className="pb-2 pr-2">
        <button 
          onClick={()=> props.removeAppointment(props.appointment.id)}
          className="bg-red-500 p-1 text-sm text-white rounded-md"
        >
          Remover
        </button>
      </div>
  </div>
  )
}