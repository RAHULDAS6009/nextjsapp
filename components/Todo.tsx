import Image from "next/image";
import editIcon from "@/assest/edit.svg";
import delteIcon from "@/assest/delete.svg";
import completeIcon from "@/assest/complete.svg";
import { useState } from "react";

export function Todo({ todo }: { todo: string | undefined }) {
  const [edit, setEdit] = useState(false);
  const [complete, setComplete] = useState(false);
  return (
    <>
      {todo && (
        <div className="flex justify-between items-center w-full py-4 px-2 rounded-lg bg-white drop-shadow-2xl">
          {edit ? (
            <input className="w-full h-full outline-none" type="text" />
          ) : (
            <div className={`${complete ? "line-through" : "no-underline"} flex items-center `}>
             { todo}
            </div>
          )}
          {/* edit delete complete */}
          <div className="flex gap-2">
            <Image
              onClick={() => {
                setEdit(true);
              }}
              className="cursor-pointer"
              src={editIcon}
              alt="editIcon"
            />
            <Image className="cursor-pointer" src={delteIcon} alt="delteIcon" />
            <Image
              onClick={() => {
                console.log("hello world");

                setComplete(true);
              }}
              className={`cursor-pointer`}
              src={completeIcon}
              alt="completeIcon"
            />
          </div>
        </div>
      )}
    </>
  );
}
