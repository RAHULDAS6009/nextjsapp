"use client";
import Image from "next/image";
import addIcon from "@/assest/add.svg";
import searchIcon from "@/assest/search.svg";
import { Todo } from "@/components/Todo";
import { useState } from "react";
import { title } from "process";

interface Todo {
  id: number;
  title: string;
}

let globalId = 1;

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: globalId++,
      title: "go to gym",
    },
    {
      id: globalId++,
      title: "go to gym",
    },
  ]);

  return (
    <div className="h-screen flex justify-center items-center w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="h-[95%] w-3/4    rounded-t-2xl">
        {/* input box */}
        <div className="flex gap-2 items-center rounded-2xl">
          <input
            className="w-full h-full relative px-2 text-base rounded-2xl outline-none py-3 "
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            value={todo}
            type="text"
          />
          <Image
            className="hover:bg-gray-200 cursor-pointer rounded-full"
            onClick={() => {
              const newTodo: Todo = {
                id: globalId++,
                title: todo,
              };
              setTodos([...todos, newTodo]);
              setTodo("");
            }}
            width={25}
            height={25}
            src={addIcon}
            alt="addicon"
          />
          <Image
            className="hover:bg-gray-200 cursor-pointer rounded-lg"
            width={25}
            height={25}
            src={searchIcon}
            alt="searchIcon"
          />
        </div>

        <div className="h-[80%] my-2 overflow-y-scroll flex flex-col gap-2 px-2 border py-2 rounded-lg">
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
