import Day from "./components/Day";

export default function App() {
  const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira", "Sábado"]
  return (
    <>
      <h1>Planner Semanal</h1>
      {week.map(day => <Day key={day} day={day} />)}
    </>

  )
}