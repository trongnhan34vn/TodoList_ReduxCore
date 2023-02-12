// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension"; 

// const composeEnhancer = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancer) // kiểm tra dữ liệu trên trình duyệt bằng redux dev tools

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../Filters/filtersSlice";
import todoListSlice from "../Todo/todoSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    }
})

export default store