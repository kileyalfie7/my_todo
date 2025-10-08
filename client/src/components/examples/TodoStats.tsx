import { TodoStats } from '../TodoStats'

export default function TodoStatsExample() {
  return (
    <div className="p-4">
      <TodoStats total={10} completed={6} pending={4} />
    </div>
  )
}
