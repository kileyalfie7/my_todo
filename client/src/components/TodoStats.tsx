import { CheckCircle2, Circle, ListTodo } from "lucide-react";

interface TodoStatsProps {
  total: number;
  completed: number;
  pending: number;
}

export function TodoStats({ total, completed, pending }: TodoStatsProps) {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-card border" data-testid="stat-total">
        <div className="p-2 rounded-md bg-primary/10">
          <ListTodo className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Tổng số</p>
          <p className="text-2xl font-semibold" data-testid="text-total-count">{total}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg bg-card border" data-testid="stat-completed">
        <div className="p-2 rounded-md bg-chart-2/10">
          <CheckCircle2 className="h-5 w-5 text-chart-2" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Hoàn thành</p>
          <p className="text-2xl font-semibold" data-testid="text-completed-count">{completed}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg bg-card border" data-testid="stat-pending">
        <div className="p-2 rounded-md bg-chart-3/10">
          <Circle className="h-5 w-5 text-chart-3" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Đang làm</p>
          <p className="text-2xl font-semibold" data-testid="text-pending-count">{pending}</p>
        </div>
      </div>
    </div>
  );
}
