export function Prev() {
  return <div className="bg-red-500 rounded-full w-7 h-7"></div>
}

export function Next() {
  return <div className="bg-red-500 rounded-full w-7 h-7"></div>
}

export function Play() {
  return <div className="bg-red-500 rounded-full w-9 h-9"></div>
}

export default function Controls() {
  return (
    <div className="flex items-center w-48 justify-evenly">
      <Prev />
      <Play />
      <Next />
    </div>
  )
}
