const { createSlice } = require("@reduxjs/toolkit");

const searchFilter = createSlice({
  name: "search",
  initialState: {
    filteredData: [],
  },
  reducers: {
    filterSearch: (state, action) => {
      state.filteredData = [...action.payload];
    },
    removeSearchData: (state, action) => {
      state.filteredData = [];
    },
  },
});

export const { filterSearch, removeSearchData } = searchFilter.actions;
export default searchFilter.reducer;
