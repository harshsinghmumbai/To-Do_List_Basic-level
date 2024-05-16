import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  let randerTask = (
    <h1 className="text-xl font-semibold ">No task Available</h1>
  );

  const deletehandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  if (mainTask.length > 0) {
    randerTask = mainTask.map((elem, i) => {
      return (
        <li className="flex justify-between items-center" key={i}>
          <div className="flex justify-between text-xl font-semibold font-mono w-[90%]">
            <h5 className="mb-3">{elem.title}</h5>
            <h6>{elem.desc}</h6>
            <button
              onClick={() => {
                deletehandler(i);
              }}
              className="bg-red-400 text-white text-lg px-5 rounded-lg mb-3"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div id="parent_container">
        <h1 className="bg-black text-white text-2xl font-semibold text-center p-1">
          Harsh To-do List
        </h1>
        <div id="form_part" className="text-center mt-5">
          <form
            onSubmit={submithandler}
            className="space-y-3 flex flex-col justify-center  "
          >
            <input
              type="text"
              className="outline-none border-2 border-black rounded-lg p-1 px-5 text-xl sm:w-[19.5rem] sm:h-10  "
              placeholder="Enter Title Here"
              value={title} //initial value kya hoga //
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input
              type="text"
              className="outline-none border-2 border-black rounded-lg p-1 px-5 text-xl sm:w-[19.5rem] sm:h-10 "
              placeholder="Enter Task Description"
              value={desc} //initial value kya hoga //
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-black text-white p-1 rounded-lg px-5 text-xl ml-5 font-semibold font-mono w-32 h-9 sm:w-19 sm:h-10"
            >
              Add Task
            </button>
          </form>
        </div>
        <hr className="mt-5 mb-5 border-2" />
        <div className="bg-slate-200 p-8 ">
          <ul>{randerTask}</ul>
        </div>
      </div>
    </>
  );
};

export default App;
