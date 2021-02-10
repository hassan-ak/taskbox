// Imports
// Redux toolkit imports
import { createSlice } from "@reduxjs/toolkit";
// Initial state imports
import { InitialState } from './initialState';

// Product Slice
export const tasksSlice = createSlice({
    name: "Tasks",
    initialState: InitialState,
    reducers: {
        // Add new Task function
        add: (state, action) => {
          return{
            ...state,
            TasksList: [action.payload, ...state.TasksList]
          };
        },
        // Pin a task
        pinn: (state, action)=>{
          return{
            ...state,
            TasksList: [
              ...state.TasksList.filter( Task => Task.id !== action.payload.id), 
              action.payload
            ]
          }
        },
        // Archieve a task
        archive: (state, action)=>{
          return{
            ...state,
            TasksList: [
              ...state.TasksList.filter( Task => Task.id !== action.payload.id), 
              action.payload
            ]
          }
        }
      }
});

// Actions Exports
export const {add, pinn, archive} = tasksSlice.actions; 