import Day from "./components/Day";

export default function App() {
  const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira", "Sábado"]
  return (
    <>
    <div className="">
    <h1 className="">Planner Semanal</h1>
    </div>
    <div className="">
      {week.map(day => <Day key={day} day={day} />)}
    </div>
    </>
  )
}