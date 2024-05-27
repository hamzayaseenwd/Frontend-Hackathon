// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const todoSlice = createSlice({
//   name: "Titles",
//   initialState: {
//     todos: [
//       {
//         title: "Hamza",
//         description: "This is your assignment",
//         id: nanoid(),
//       },
//     ],
//   },
//   reducers: {
//     addTitle: (state, action) => {
//       state.todos.push({
//         title: action.payload.title,
//         description: action.payload.description,
//         id: nanoid(),
//       });
//     },
//     removeTitle: (state, action) => {
//       state.title.splice(action.payload.index, 1);
//       state.description.splice(action.payload.index, 1);
//     },
//     updateTitle: (state, action) => {
//       state.title({
//         title: action.payload.title,
//         description: action.payload.description,
//       });
//     },
//   },
// });

// export const { addTitle, removeTitle, updateTitle } = todoSlice.actions;
// export default todoSlice.reducer;
