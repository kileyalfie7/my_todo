import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TodoItem } from "@/components/TodoItem";
import { AddTodoForm } from "@/components/AddTodoForm";
import { EditTodoDialog } from "@/components/EditTodoDialog";
import { TodoStats } from "@/components/TodoStats";
import { ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//todo: remove mock functionality - replace with real API calls
interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

export default function Home() {
  //todo: remove mock data - this will come from backend API
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "Hoàn thành báo cáo dự án Q4",
      description: "Cần tổng hợp số liệu và phân tích kết quả",
      completed: false,
    },
    {
      id: "2",
      title: "Họp với team marketing",
      description: "Thảo luận chiến lược quảng cáo mới",
      completed: true,
    },
    {
      id: "3",
      title: "Review code cho feature mới",
      completed: false,
    },
  ]);

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  //todo: remove mock functionality - replace with API call
  const handleAddTodo = (title: string, description?: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  //todo: remove mock functionality - replace with API call
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //todo: remove mock functionality - replace with API call
  const handleEditTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setEditingTodo(todo);
      setIsEditDialogOpen(true);
    }
  };

  //todo: remove mock functionality - replace with API call
  const handleSaveTodo = (id: string, title: string, description?: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };

  //todo: remove mock functionality - replace with API call
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
  };

  const incompleteTodos = filteredTodos.filter((t) => !t.completed);
  const completedTodos = filteredTodos.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <ListTodo className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold" data-testid="text-app-title">
              Todo List
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <TodoStats
            total={stats.total}
            completed={stats.completed}
            pending={stats.pending}
          />

          <div className="space-y-4">
            <AddTodoForm onAdd={handleAddTodo} />
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
            <TabsList className="w-full justify-start" data-testid="tabs-filter">
              <TabsTrigger value="all" data-testid="tab-all">
                Tất cả ({todos.length})
              </TabsTrigger>
              <TabsTrigger value="active" data-testid="tab-active">
                Đang làm ({stats.pending})
              </TabsTrigger>
              <TabsTrigger value="completed" data-testid="tab-completed">
                Hoàn thành ({stats.completed})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-6 space-y-3">
              {incompleteTodos.length > 0 && (
                <div className="space-y-3" data-testid="list-incomplete-todos">
                  {incompleteTodos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      {...todo}
                      onToggle={handleToggleTodo}
                      onEdit={handleEditTodo}
                      onDelete={handleDeleteTodo}
                    />
                  ))}
                </div>
              )}

              {completedTodos.length > 0 && (
                <div className="space-y-3 mt-6" data-testid="list-completed-todos">
                  {incompleteTodos.length > 0 && (
                    <div className="flex items-center gap-2 py-2">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-sm text-muted-foreground">
                        Đã hoàn thành
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                  )}
                  {completedTodos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      {...todo}
                      onToggle={handleToggleTodo}
                      onEdit={handleEditTodo}
                      onDelete={handleDeleteTodo}
                    />
                  ))}
                </div>
              )}

              {filteredTodos.length === 0 && (
                <div className="text-center py-12" data-testid="empty-state">
                  <div className="inline-flex p-4 rounded-full bg-muted/50 mb-4">
                    <ListTodo className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    {filter === "all" && "Chưa có công việc nào"}
                    {filter === "active" && "Không có công việc đang làm"}
                    {filter === "completed" && "Chưa hoàn thành công việc nào"}
                  </h3>
                  <p className="text-muted-foreground">
                    {filter === "all" && "Thêm công việc mới để bắt đầu"}
                    {filter === "active" && "Tất cả công việc đã hoàn thành"}
                    {filter === "completed" && "Hãy hoàn thành một số công việc"}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <EditTodoDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        todo={editingTodo}
        onSave={handleSaveTodo}
      />
    </div>
  );
}
