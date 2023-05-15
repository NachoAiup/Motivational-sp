import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, goal: "Have fun", complete: false },
  { id: 2, goal: "Stay focused", complete: false }
];

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      console.log("jaja");
      state.push(action.payload);
    },
    removeGoal: (state, action) => {
      return (state = state.filter((goal) => goal.id !== action.payload));
    },
    completeGoal: (state, action) => {
      return state.map((goal) => {
        return goal.id === action.payload ? { ...goal, complete: true } : goal;
      });
    }
  }
});

export const { addGoal, removeGoal, completeGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals;
export default goalsSlice.reducer;
