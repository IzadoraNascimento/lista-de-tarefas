import Day from "./components/Day";

export default function App() {
  const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira", "Sábado"]
  return (
    <>
    <div className="flex justify-center p-4">
    <h1 className="text-2xl font-semibold">Planner Semanal</h1>
    </div>
    <div className="grid grid-rows-1 gap-2 md:grid-cols-3">
      {week.map(day => <Day key={day} day={day} />)}
    </div>
    </>
  )
}