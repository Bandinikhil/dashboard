import searchFilter from "./searchFilter";

const { configureStore } = require("@reduxjs/toolkit");
const { default: deletedSlice } = require("./deletedSlice");

const store = configureStore({
  reducer: {
    delete: deletedSlice,
    search: searchFilter,
  },
});

export default store;
