import React from "react";
import Task from "./component/Task";
import styled from "styled-components";
import "./App.css";
import taskList from "./TaskList";

const Wrapp = styled.div`
  width: 50%;
  background-color: rgba(240, 207, 117, 0.9);
  border: 1px solid black;
  text-align: center;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 3px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
    /* The top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.9),
    /* The second layer */ 0 10px 0 -5px rgba(240, 207, 117, 0.9),
    /* The second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.9),
    /* The third layer */ 0 20px 0 -10px rgba(240, 207, 117, 0.9),
    /* The third layer shadow */ 0 20px 1px -9px rgba(0, 0, 0, 0.9);
`;

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: taskList,
    };
  }

  render() {
    const TaskListComponent = this.state.todo.map((task) => (
      <Task id={task.id} task={task} />
    ));
    return <Wrapp>{TaskListComponent}</Wrapp>;
  }
}
