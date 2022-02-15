import React from "react";
import TaskListItem from "../TaskListItem";
export default function Tasklist() {
  const data = [
    {
      task: "Some task",
      notes: "Some notes",
    },
    {
      task: "Some task",
      notes: "Some notes",
    },
    {
      task: "Some task",
      notes: "Some notes",
    },
    {
      task: "Some task",
      notes: "Some notes",
    },
    {
      task: "Some task",
      notes: "Some notes",
    },
    {
      task: "Some task",
      notes: "Some notes",
    },
    {
      task: "Some task",
      notes: "Some notes",
    },
  ];

  return (
    <section>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr className="table-header">
            <th>Task</th>
            <th>Notes</th>
            <th>Complete</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="viewList">
          {data.map((item, index) => {
            return <TaskListItem key={index} task={item.task} notes={item.notes} />;
          })}
        </tbody>
      </table>
    </section>
  );
}
