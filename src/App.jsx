import Day from "./components/Day";

export default function App() {
  const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira", "Sábado"]
  return (
    <>
      <h1 className="text-center text-xl font-bold p-4">Planner Semanal</h1>
      <div className="flex flex-row space-x-4 px-8 py-8">
        {week.map(day => <Day key={day} day={day} />)}
      </div>
    </>

  )
}