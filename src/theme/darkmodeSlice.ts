import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { MenuTheme } from "antd";

const initialState: MenuTheme = "light";

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state: MenuTheme, action: PayloadAction<boolean>) {
      state = action.payload ? "dark" : "light";
      console.log(action.payload, state);
    },
  },
});

export const themeActions = ThemeSlice.actions;
export const selectThemeMode = (state: RootState) => state.theme;

const ThemeReducer = ThemeSlice.reducer;
export default ThemeReducer;
