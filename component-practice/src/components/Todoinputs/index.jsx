import React from "react";

export default function Todoinputs() {
  return (
    <section id="add-task-input" className="addtask-input">
      <input type="text" id="newTask" placeholder="New Task" />
      <input type="text" id="newNote" placeholder="Note" />
      <button type="text" id="addTaskButton">
        Add Task
      </button>
    </section>
  );
}
