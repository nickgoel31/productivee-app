import Image from "next/image";
import TodoCard from "./_components/todo-card";
import NewTodoAdd from "./_components/new-todo-add";
import { getAllTodos } from "@/data/todos";

export default async function Home() {

    const todos = await getAllTodos()

  return (
    <main className="flex flex-col gap-7">
        <h1 className="text-center font-semibold text-4xl">Todo List</h1>
        <div className="flex flex-col gap-3">
            {todos.map((todo) => (
                <TodoCard id={todo.id} key={todo.id} title={todo.title} isDone={todo.isDone}/>
            ))}
        </div>
        <NewTodoAdd />
    </main>
  );
}
