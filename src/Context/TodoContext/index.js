import React from "react";

const TodoContext = React.createContext({
  todoCart: [
    {
      todoName: "Going to Gym",
      isCompleted: false,
    },
    {
      todoName: "College",
      isCompleted: false,
    },
  ],
});

export default TodoContext;
