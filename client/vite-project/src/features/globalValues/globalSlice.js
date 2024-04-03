import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudent = createAsyncThunk(
    "people/fetchStudent", 
    async (data) => { 
      const response = await axios(
        `http://localhost:3000/api/v1/people/${data.student._id}`
      ); 
      return response.data;
    } 
);
const globalSlice = createSlice({
    name: "globalValues",
    initialState, 
    reducers: {
        resetInputVlaues: (state) => {
            state.inputValues = { name:"", email: "", phoneNumber: "", hobbies: ""};
        }, 
        updateNameInputValue: (state, action) => {
            state.inputValues.name = action.payload.name;
        },
        updateEmailInputValue: (state, action) => {
            state.inputValues.email = action.payload.email;
        },
        updatePhoneNumberInputValue: (state, action) => {
            state.inputValues.phoneNumber = action.payload.phoneNumber;
        
        }, 
        updateHobbiesInputValue: (state, action) => {
            state.inputValues.Hobbies = action.payload.Hobbies;
        },
        changeStatuListener: (state) => {
            state.statusListener = !state.statusListener;
        
        },
        changeCurrentUpdateStudent: (state, action) => {
            state.currentUpdateStudent = action.payload.id;
        },

    },
   extraReducers: (builder) => {
     builder
     .addCase(fetchStudent.pending, (state) => {})
     .addCase(fetchStudent.fulfilled, (state, action) => {
        state.currentUpdateStudent = action.payload.student._id;
        state.inputValues.name = action.payload.student.name;
        state.inputValues.email = action.payload.student.email;
        state.inputValues.phoneNumber = action.payload.student.phoneNumber;
        state.inputvalues.hobbies = action.payload.student.hobbies;
     })
      .addCase(fetchStudent.rejected, (state,action) = {});
   },
});
export const {
    resetInputValues,
    updateNameInputValue,
    updateEmailInputValue,
    updatePasswordInputValue,
    changeStatusListener,
    changeCurrentUpdateStudent,
  } = globalSlice.actions;

  export default globalSlice.reducer;
