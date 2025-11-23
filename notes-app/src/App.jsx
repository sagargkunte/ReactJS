import React from "react";

const App = () => {
  const submitHandleer = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div
      className="bg-black h-full text-white lg:flex 
"
    >
      <form
        onSubmit={(e) => {
          submitHandleer(e);
        }}
        className="flex flex-col p-10 bg-black border border-white text-white lg:w-1/2 w-full"
      >
        <input
          type="text"
          placeholder="Enter you heading"
          className="border-2 rounded px-5 py-2 h-16 m-2 border-white text-white bg-black"
        />
        <textarea
          type="text"
          placeholder="Enter details"
          className="border-2 rounded px-5 py-2 h-32 m-2 border-white text-white bg-bl;ack"
        />

        <button className="bg-white text-black m-7 h-15 rounded cursor-pointer">
          Add Note
        </button>
      </form>
      
      <div className="flex flex-wrap p-10 bg-zinc-300 lg:w-1/2 w-full gap-2">
      <h3 className="text-black text-center font-bold text-xl">Your Notes</h3>
        <div className="h-32 w-full rounded-2xl bg-black"></div>
        <div className="h-32 w-full rounded-2xl bg-black"></div>
        <div className="h-32 w-full rounded-2xl bg-black"></div>
        <div className="h-32 w-full rounded-2xl bg-black"></div>
      </div>
    </div>
  );
};

export default App;
