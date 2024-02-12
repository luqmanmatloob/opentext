"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



const reloadAndScrollToBottom = () => {
  window.location.reload(); // Reload the page
  window.scrollTo(0, document.documentElement.scrollHeight); // Scroll to the bottom
};



export default function SendMsg() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }
      
    try {
      const res = await fetch("api/msg", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {

        setTitle('');
        setDescription('');
        console.log("msg send successfuly")
        reloadAndScrollToBottom(); // Call the function to reload and scroll to bottom



      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 bg-[#b8feff] rounded-md"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 bg-[#b8feff] rounded-md"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit hover:bg-green-800 active:bg-green-950 cursor-pointer transition duration-300 ease-in-out "
      >
        Send Msg
      </button>
    </form>
  );
}
