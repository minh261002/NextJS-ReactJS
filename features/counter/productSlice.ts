import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface ProductState {
  productList: any[];
}
// Define the initial state using that type
const initialState: ProductState = {
  productList: [1, 2, 3],
};
export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const {} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default productSlice.reducer;
