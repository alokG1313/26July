import React, { useEffect, useState } from "react";

const TodoComponents = () => {
  const todoListValue = {
    id: 0,
    todoName: "",
    isCompleted: false,
    isDeleted: false,
    todoDescription: "",
  };

  const [todo, setTodo] = useState(todoListValue);
  const [todoIndex, setTodoIndex] = useState(1);
  const [todoList, setTodoList] = useState([]);
  const [notCompletedTodolist, setNotCompletedTodoList] = useState([]);
  const [completedTodolist, setCompletedTodoList] = useState([]);

  const handleChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todo,
      id: todoIndex,
    };

    setTodoList([...todoList, newTodo]);
    setTodoIndex((prev) => prev + 1);
    setTodo(todoListValue);
  };

  const handleCompleted = (e, checkedItem) => {
    const updatedList = todoList.map((item) =>
      item.id === checkedItem.id
        ? { ...item, isCompleted: e.target.checked }
        : item
    );
    // console.log(updatedList);
    setTodoList([...updatedList]);
  };

  const handleDelete = (itemId) => {
    // const indexId = notCompletedTodolist.find((item,index)=> item.id === itemId);
    // console.log(indexId);
    console.log(itemId);
    let deletedArray = todoList.filter((item, index) => item.id !== itemId);
    console.log(deletedArray);

    setTodoList([...deletedArray]);
  };

  const handleUpdate = (item) => {
    console.log(item);
    setTodo(item);
  };

  const handleUpdateSave = () => {
    console.log(todo);
    console.log(todoList.filter((item, index) => item.id === todo.id));
    // let existingitem = todoList.filter((item,index) => item.id === todo.id)[0];
    // existingitem = todo;
    setTodoList((prev) =>
      prev.map((item, index) =>
        item.id === todo.id ? { ...todo } : { ...item }
      )
    );

    setTodo(todoListValue);
  };
  useEffect(() => {
    setCompletedTodoList(todoList.filter((item) => item.isCompleted));
    setNotCompletedTodoList(todoList.filter((item) => !item.isCompleted));
  }, [todoList]);

  return (
    <>
      <div className="row justify-content-center align-content-center mx-0 mt-5">
        <div className="col-md-7">
          <input
            type="text"
            className="form-control my-1"
            placeholder="Create todo"
            name="todoName"
            value={todo.todoName}
            onChange={handleChangeInput}
          />
          <textarea
            name="todoDescription"
            className="form-control my-1"
            placeholder="Enter description"
            onChange={handleChangeInput}
            value={todo.todoDescription}
          ></textarea>
          {todo.id === 0 ? (
            <button
              className="btn btn-success text-center mt-3"
              onClick={handleCreateTodo}
            >
              Create &nbsp;
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          ) : (
            <button
              className="btn btn-success text-center mt-3"
              onClick={handleUpdateSave}
            >
              Update &nbsp;
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          )}
        </div>
      </div>

      <div className="row justify-content-between mx-0 mt-4">
        {/* Not Completed Todos */}
        <div className="col-md-5">
          <h4>Pending Todos</h4>
          {notCompletedTodolist.length > 0 ? (
            notCompletedTodolist.map((item) => (
              <div key={item.id} className="card my-2">
                <div className="card-header">ID: {item.id}</div>
                <div className="card-body">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="isCompleted"
                    checked={item.isCompleted}
                    onChange={(e) => handleCompleted(e, item)}
                  />{" "}
                  Mark Completed
                  <h5 className="card-title mt-2">{item.todoName}</h5>
                  <p className="card-text">{item.todoDescription}</p>
                </div>
                <button onClick={() => handleDelete(item.id)}>delete</button>
                <button onClick={() => handleUpdate(item)}>update</button>
              </div>
            ))
          ) : (
            <h5>No pending todos</h5>
          )}
        </div>

        {/* Completed Todos */}
        <div className="col-md-5">
          <h4>Completed Todos</h4>
          {completedTodolist.length > 0 ? (
            completedTodolist.map((item) => (
              <div key={item.id} className="card my-2">
                <div className="card-header">ID: {item.id}</div>
                <div className="card-body">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="isCompleted"
                    checked={item.isCompleted}
                    onChange={(e) => handleCompleted(e, item)}
                  />{" "}
                  Mark Incomplete
                  <h5 className="card-title mt-2">{item.todoName}</h5>
                  <p className="card-text">{item.todoDescription}</p>
                </div>
              </div>
            ))
          ) : (
            <h5>No completed todos</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoComponents;
