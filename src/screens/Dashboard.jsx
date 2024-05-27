import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, removeTitle, updateTitle, } from "../config/redux/reducers/todoSlice";

const Dashboard = () => {
  
  //get value from form
  const titleRef = useRef();
  const descriptionRef = useRef();

  // get data from redux
  const selector = useSelector((state) => state.title);
  console.log(selector);

  // data bhejna ka liya
  const dispatch = useDispatch();

  //addTodo
  const addingTitle = (event) => {
    event.preventDefault();
    
    dispatch(
      addtitle({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      })
    );
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };
  // updateTodo
  // const updatingTitle = () => {
  //   titleUpdateValue = prompt("enter your value")
  //   descriptionUpdateValue = prompt("enter your value")
  //   dispatch(
  //     updateTodo({
  //       title: titleUpdateValue,
  //       description: descriptionUpdateValue,
  //     })
  //   );
  // };

  //delete Todo
  // const deletetitle = (index) => {
  //   console.log(index);
  //   dispatch(
  //     removeTodo({
  //       index: index,
  //     })
  //   );
  // };

  return (
    <>
      <div>Dashboard</div>

      <h1>Todo App</h1>
      <form onSubmit={addingTitle}>
        <input type="text" placeholder="enter title" ref={titleRef} />
        <input type="text" placeholder="enter description" ref={descriptionRef} />
        <button type="submit">click</button>
      </form>
      <ul>
        {selector.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteTitle(index)}>Delete</button>
              <button onClick={() => updatingitle(index)}>edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default App;

    
    
    
    
   