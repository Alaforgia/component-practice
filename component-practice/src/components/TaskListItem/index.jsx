import React from "react";

export default function TaskListItem({ task, notes }) {
  return (
    <tr className="task-list-item">
      <td>{task}</td>
      <td>{notes}</td>
      <td>
        <button className="isCompletedBtn">Complete</button>
      </td>
      <td>
        <button className="deleteBtn">Delete</button>
      </td>
    </tr>
  );
}
