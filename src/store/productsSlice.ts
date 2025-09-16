import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../types/item";
import { getAllItems } from "../api/fetchItems";

interface ProductsState {
  allItems: Item[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  allItems: [],
  isLoading: false,
  error: null,
};

// async thunk
export const fetchAllProducts = createAsyncThunk<Item[]>(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const items = await getAllItems();
      return items;
    } catch (err: any) {
      return rejectWithValue(err.message ?? "Failed to fetch items");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allItems = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
