import { createSlice } from '@reduxjs/toolkit';

import { assignments } from '../../Database';
const initialState = {
  assignments: assignments,
  assignment: {
    title: 'New Assignment',
    description: 'New Assignment Description',
    points: 100,
    due: '2023-03-25',
    availableFrom: '2023-03-25',
    until: '2023-03-25',
  },
};
const assignmentSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      // console.log(action.payload);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
  },
});
// export const { addModule, deleteModule, updateModule, setModule } =
export const {
  addAssignment,
  setAssignment,
  updateAssignment,
  deleteAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
