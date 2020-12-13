export default function Progress() {
  return (
    <div className="flex items-center text-xs text-gray-700">
      <time>00:00</time>
      <div className="flex-auto h-1 mx-3 bg-red-500 rounded" />
      <time>05:16</time>
    </div>
  )
}
