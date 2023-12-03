const { createSlice } = require("@reduxjs/toolkit");

const deletedSlice = createSlice({
  name: "delete",
  initialState: {
    upDatedUsers: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.upDatedUsers = action.payload;
    },
    removeUsers: (state, action) => {
      state.upDatedUsers = [];
    },
  },
});

export const { addUsers, removeUsers } = deletedSlice.actions;
export default deletedSlice.reducer;
