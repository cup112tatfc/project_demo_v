import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dashboardReducer from "features/dashboard/dashboardSlice";
import createSagaMiddleware from "redux-saga";
import ThemeReducer from "theme/darkmodeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: { dashboard: dashboardReducer, theme: ThemeReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});
sagaMiddleWare.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
